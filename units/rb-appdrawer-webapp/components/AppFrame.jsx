// @flow

import Drawer from '@material-ui/core/Drawer'

import Fab from '@material-ui/core/Fab'

import { withStyles } from '@material-ui/core/styles'

import { withRouter } from 'found'
import IconMenu from 'mdi-material-ui/Menu'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createFragmentContainer, graphql } from 'react-relay'

import AppDrawerNavItems from '../../_configuration/rb-appdrawer-webapp/AppDrawerNavItems'
import AppDrawerTitle from '../../_configuration/rb-appdrawer-webapp/AppDrawerTitle'
import NavBarDefaultTitle from '../../_configuration/rb-appdrawer-webapp/NavBarDefaultTitle'

import AppFrameContext from './AppFrameContext'

const drawerWidth = 240

const styles = (theme) => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
  root: {
    width: '100%',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  menuButton: {
    position: 'absolute',
    zIndex: 1199, // Drawer is 1200
    [theme.breakpoints.down('sm')]: {
      marginLeft: 4,
      marginTop: 4,
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      marginLeft: 8,
      marginTop: 8,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 12,
      marginTop: 12,
    },
  },

  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
  },
})

const titlePrefix = process.env.NODE_ENV === 'production' ? '' : '<DEV> '

class AppFrame extends React.Component<
  { children?: any, classes: Object, router: Object, Viewer: Object },
  {
    drawerIsOpen: boolean,
    title: string,
  },
> {
  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      drawerIsOpen: false,
      title: titlePrefix + NavBarDefaultTitle,
    }
  }

  _handle_Drawer_Open = () => {
    this.setState({ drawerIsOpen: true })
  }

  _handle_Drawer_Close = () => {
    this.setState({ drawerIsOpen: false })
  }

  _handle_GoTo = (to: string) => {
    this.setState({ drawerIsOpen: false })

    this.props.router.push(to)
  }

  setTitle = (title: string) => {
    this.setState({ title: titlePrefix + title })
  }

  clearTitle = () => {
    this.setState({ title: titlePrefix + NavBarDefaultTitle })
  }

  render() {
    const { setTitle, clearTitle } = this
    const { children, classes, Viewer } = this.props
    const { drawerIsOpen, title } = this.state

    return (
      <div className={classes.root}>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        <div className={classes.appFrame}>
          <Fab
            aria-label="open drawer"
            className={classes.menuButton}
            color="primary"
            size="small"
            onClick={this._handle_Drawer_Open}
          >
            <IconMenu />
          </Fab>

          <Drawer open={drawerIsOpen} onClose={this._handle_Drawer_Close}>
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <AppDrawerTitle handle_GoTo={this._handle_GoTo} />
              </div>
            </div>

            <AppDrawerNavItems Viewer={Viewer} onClick={this._handle_GoTo} />
          </Drawer>

          <AppFrameContext.Provider value={{ setTitle, clearTitle }}>
            {children}
          </AppFrameContext.Provider>
        </div>
      </div>
    )
  }
}

export default createFragmentContainer(
  withStyles(styles)(withRouter(AppFrame)),
  {
    Viewer: graphql`
      fragment AppFrame_Viewer on Viewer {
        UserToken2
        ...AppDrawerNavItems_Viewer
      }
    `,
  },
)
