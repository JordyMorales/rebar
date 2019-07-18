// @flow

import Card from '@material-ui/core/Card'

import CardHeader from '@material-ui/core/CardHeader'

import { withStyles } from '@material-ui/core/styles'

import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

import TextField from '@material-ui/core/TextField'

import ResponsiveContentArea from '../../rb-appbase-webapp/components/ResponsiveContentArea'
import ToDoAddMutation from '../../rb-example-todo-client/relay/ToDoAddMutation'

const styles = theme => ({
  card: {
    minWidth: 275
  }
})

class ToDoScreen extends React.Component<
  {
    classes: Object,
    Viewer: {},
    children: Object,
    relay: Object
  },
  {
    ToDo_Text_New: string
  }
> {
  constructor(props, context) {
    super(props, context)

    this.state = {
      ToDo_Text_New: ''
    }
  }

  _handle_onKeyDown_AddToDo = e => {
    if (e.keyCode === 13) {
      const { relay, Viewer } = this.props

      ToDoAddMutation.commit(
        relay.environment,
        Viewer,
        this.state.ToDo_Text_New
      )

      this.setState({
        ToDo_Text_New: ''
      })
    }
  }

  _handle_OnChange = event => {
    this.setState({
      ToDo_Text_New: event.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <ResponsiveContentArea>
        <Card className={classes.card}>
          <CardHeader title="TO DOs" subheader="List of TO DOs for user" />
          {this.props.children}
          <div style={{ marginLeft: 4, marginRight: 4 }} />
          <TextField
            label="What needs to be done?"
            value={this.state.ToDo_Text_New}
            fullWidth={true}
            onKeyDown={this._handle_onKeyDown_AddToDo}
            onChange={this._handle_OnChange}
          />
        </Card>
      </ResponsiveContentArea>
    )
  }
}

export default createFragmentContainer(withStyles(styles)(ToDoScreen), {
  Viewer: graphql`
    fragment ToDoScreen_Viewer on Viewer {
      id
    }
  `
})
