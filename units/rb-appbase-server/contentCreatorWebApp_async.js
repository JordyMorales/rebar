// @flow

import fs from 'fs'
import path from 'path'

import ejs from 'ejs'
import createRender from 'found/lib/createRender'
import { getFarceResult } from 'found/lib/server'
import NestedError from 'nested-error-stacks'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import Helmet from 'react-helmet'
import serialize from 'serialize-javascript'

import AppWrapper from '../_configuration/rb-appbase-webapp/AppWrapper'
import ErrorComponent from '../_configuration/rb-appbase-webapp/ErrorComponent'
import getGraphQLLocalServerURL from '../_configuration/rb-base-server/getGraphQLLocalServerURL'
import log from '../rb-base-server/log'
import { version } from '../../package.json'
import UserToken2ServerRendering from '../_configuration/rb-base-server/UserToken2ServerRendering'
import htmlHeadAdditions from '../_configuration/rb-appbase-webapp/htmlHeadAdditions'
import type { SiteInformation } from '../rb-appbase-server/types/SiteInformation.types'
import { createResolver, historyMiddlewares, routeConfig } from '../rb-appbase-webapp/router'

import FetcherServer from './fetcherServer'

// Read environment
require( 'dotenv' ).load()

const envHost = process.env.HOST
if ( envHost == null || typeof envHost !== 'string' )
  throw new Error( 'Error: rb-appbase-webapp requires the environment variable HOST to be set' )

const envPort = process.env.PORT
if ( envPort == null || typeof envPort !== 'string' )
  throw new Error( 'Error: rb-appbase-webapp requires the environment variable PORT to be set' )

//

// HTML page template
var htmlEjs = ejs.compile( fs.readFileSync( path.resolve( __dirname, 'html.ejs' ), 'utf8' ) )

//

function getAssetsPath( siteInformation: SiteInformation ): string {
  if ( process.env.NODE_ENV === 'production' ) {
    // For when per-site assets are created
    /*
    const assetsPath =
      siteInformation.isMaDesignerDisabled || siteInformation.inEditingMode
        ? // When editing in production, use the assets with the configuration readign code intact (built when cutting a site version)
          `/assets/${version}`
        : // When in production mode, serve the assets compiled by designer
          `/sassets/${version}.${siteInformation.siteConfiguration.metadata.version}`
    */

    // If public URL is available in site configuration, prefix the assets with the public URL
    let assetsPathPrefix = ''
    if (
      siteInformation.siteConfiguration.webapp &&
      siteInformation.siteConfiguration.webapp.publicURL
    ) {
      assetsPathPrefix = siteInformation.siteConfiguration.webapp.publicURL
    }

    // Asset path is versioned
    const assetsPath = assetsPathPrefix + `/assets/${version}`
    return assetsPath
  } else {
    // Get webpack port only in development. In production it can be omitted
    const envPortWebpack = process.env.PORT_WEBPACK
    if ( envPortWebpack == null || typeof envPortWebpack !== 'string' )
      throw new Error(
        'Error: rb-appbase-webapp requires the environment variable PORT_WEBPACK to be set',
      )

    // When in development, always go to webpack over http
    return `http://${envHost}:${envPortWebpack}/${version}`
  }
}

const render = createRender({
  renderError( obj: Object ): React$Element<*> {
    const { error } = obj

    if ( error.status !== 404 ) {
      log( 'error', 'Error: Render on server createRender renderError', error )
    }

    return <ErrorComponent httpStatus={error.status} />
  },
})

export default ( async function contentCreatorWebApp_async(
  siteInformation: SiteInformation,
  reqUrl: string,
  reqUserAgent: string,
  reqUserToken1: ?string,
) {
  try {
    const assetsPath = getAssetsPath( siteInformation )

    // It is possible that artifact_id can not be determined during development. For instance, when browsing
    // the project on localhost using a specific port, Chrome will request robots.txt and favicon.ico and
    // they will not have the proper dev-host header. In this case simply report the file missing.
    // This does not affect operation in production, since host will be passed for all requests.
    if ( !siteInformation ) {
      return { status: 404 }
    }

    // If public URL is available in site configuration, prefix the assets with the public URL
    let artifactNamePrefix = ''
    if (
      siteInformation.siteConfiguration.webapp &&
      siteInformation.siteConfiguration.webapp.artifactNamePrefix
    ) {
      artifactNamePrefix = siteInformation.siteConfiguration.webapp.artifactNamePrefix
    }

    const graphQLServerUrl =
      `http://${envHost}:${envPort}` +
      artifactNamePrefix +
      getGraphQLLocalServerURL( siteInformation )
    const fetcher = new FetcherServer( graphQLServerUrl, reqUserToken1, UserToken2ServerRendering )

    const userAgent = reqUserAgent
    const { siteConfiguration } = siteInformation
    const siteConfigurationSubset = {
      webapp: siteConfiguration.webapp,
      builder: siteConfiguration.builder,
    }

    const siteRouteConfig = routeConfig( siteConfigurationSubset )

    const { redirect, element } = await getFarceResult({
      url: reqUrl,
      historyMiddlewares,
      routeConfig: siteRouteConfig,
      resolver: createResolver( fetcher ),
      render,
    })

    if ( redirect ) {
      return { status: 302, redirectUrl: redirect.url }
    }

    const relayPayloads = serialize( fetcher, { isJSON: true })

    if (
      relayPayloads.indexOf(
        '{"message":"GraphQL server was given a session, but the session is invalid"}',
      ) > 0
    ) {
      return {
        status: 403,
        htmlContent: 'The server was given a session, but the session is invalid',
      }
    }

    const sheets = new SheetsRegistry()
    const helmet = Helmet.rewind()

    const rootHTML = ReactDOMServer.renderToString(
      <JssProvider registry={sheets}>
        <AppWrapper userAgent={userAgent} siteConfiguration={siteConfigurationSubset} url={reqUrl}>
          {element}
        </AppWrapper>
      </JssProvider>,
    )

    const htmlContent = htmlEjs({
      assets_path: assetsPath,
      root_html: rootHTML,
      server_side_styles: sheets.toString(),
      helmet,
      htmlHeadAdditions,
      siteConfiguration: JSON.stringify( siteConfigurationSubset ),
      relayPayloads,
    })

    return {
      status: 200,
      htmlContent,
    }
  } catch ( err ) {
    throw new NestedError( 'Rendering failed', err )
  }
})
