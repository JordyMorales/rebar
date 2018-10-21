// @flow

import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'

import { withStyles } from '@material-ui/core/styles'

import IconInbox from '@material-ui/icons/Inbox'

import IconToday from '@material-ui/icons/Today'

import IconEdit from '@material-ui/icons/Edit'

import IconImportContacts from '@material-ui/icons/ImportContacts'

import IconMyLocation from '@material-ui/icons/MyLocation'

import IconOpenWith from '@material-ui/icons/OpenWith'

import IconLock from '@material-ui/icons/Lock'

import React from 'react'

import NavMenuItemWithIcon from '../../rb-appdrawer-webapp/components/NavMenuItemWithIcon'

const styles = {
  list: {
    width: 250,
    flex: 'initial',
  },
}

class AppDrawerNavItems extends React.Component<{ classes: Object, onClick: Function }> {
  render() {
    const { classes, onClick } = this.props

    return (
      <div>
        <Divider />
        <List className={classes.list}>
          <NavMenuItemWithIcon
            icon={<IconInbox />}
            label="To Dos"
            onClick={() => onClick( '/todo/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconEdit />}
            label="Ensayo Edit"
            onClick={() => onClick( '/ensayo/in-place-edit/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconImportContacts />}
            label="Ensayo Public"
            onClick={() => onClick( '/ensayo/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconMyLocation />}
            label="Inscriptio"
            onClick={() => onClick( '/inscriptio/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconToday />}
            label="Translaticiarum"
            onClick={() => onClick( '/translaticiarum/' )}
          />
          <Divider />
          <NavMenuItemWithIcon
            icon={<IconOpenWith />}
            label="Viewport Dimensions"
            onClick={() => onClick( '/viewport-dimensions/' )}
          />
          <NavMenuItemWithIcon
            icon={<IconLock />}
            label="Force Login"
            onClick={() => onClick( '/force-login/' )}
          />
        </List>
      </div>
    )
  }
}

export default withStyles( styles )( AppDrawerNavItems )
