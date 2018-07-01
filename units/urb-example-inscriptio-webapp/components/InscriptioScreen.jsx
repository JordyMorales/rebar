// @flow

import Card from '@material-ui/core/Card'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import React from 'react'
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps'
import { createFragmentContainer, graphql } from 'react-relay'

import ResponsiveContentArea from '../../urb-webapp-webapp/components/ResponsiveContentArea'

const MapComponent = withScriptjs(
  withGoogleMap( props => (
    <GoogleMap defaultZoom={props.defaultZoom} center={props.center}>
      {props.markers.map( ( marker, index ) => <Marker key={index} position={marker.position} /> )}
    </GoogleMap>
  ) ),
)

const styles = {
  card: {
    minWidth: 275,
    minHeight: 400,
  },
}

class InscriptioScreen extends React.Component<{ classes: Object, Viewer: Object }, Object> {
  static contextTypes = {
    rbCtx: PropTypes.object,
  }

  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = {
      center: {
        lat: 34.0522,
        lng: -118.243,
      },
      markers: [],
    }
  }

  isUnmounted = false

  render() {
    const { classes } = this.props

    const googleMapURL =
      'https://maps.googleapis.com/maps/api/js?v=3.28&libraries=places,geometry&key=' +
      this.context.rbCtx.siteConfiguration.webapp.api.googleMapsJavascriptAPI

    console.log( googleMapURL )

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="Inscriptio" />
          <CardContent>
            <MapComponent
              defaultZoom={16}
              center={this.state.center}
              content="Content here"
              googleMapURL={googleMapURL}
              markers={this.state.markers}
              loadingElement={<div>Loading...</div>}
              containerElement={<div style={{ height: 400 }} />}
              mapElement={<div style={{ height: 400 }} />}
            />
          </CardContent>
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(
  withStyles( styles )( InscriptioScreen ),
  graphql`
    fragment InscriptioScreen_Viewer on Viewer {
      Inscriptios(first: 2147483647) @connection(key: "InscriptioScreen_Inscriptios") {
        edges {
          node {
            id
            Inscriptio_LocationLat
            Inscriptio_LocationLon
          }
        }
      }
    }
  `,
)
