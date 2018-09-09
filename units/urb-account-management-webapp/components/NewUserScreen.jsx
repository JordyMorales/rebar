// @flow

import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'

import CardActions from '@material-ui/core/CardActions'

import CardContent from '@material-ui/core/CardContent'

import CardHeader from '@material-ui/core/CardHeader'

import LinearProgress from '@material-ui/core/LinearProgress'

import { withStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'

import Typography from '@material-ui/core/Typography'

import React from 'react'

import ResponsiveContentArea from '../../urb-appbase-webapp/components/ResponsiveContentArea'

const styles = theme => ({
  card: {
    minWidth: 320,
  },
  userName: {
    borderWidth: 1,
    borderColor: '#c0c0c0',
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
  },
})

class NewUserScreen extends React.Component<
  {
    classes: Object,
  },
  {
    currentOperation: 'prompt' | 'creating' | 'success' | 'failure',
    errorMessage: string,
    UserAccount_Identifier: string,
    User_Secret: string,
  },
> {
  constructor( props: Object, context: Object ) {
    super( props, context )

    this.state = {
      currentOperation: 'prompt',
      errorMessage: '',
      UserAccount_Identifier: '',
      User_Secret: '',
    }
  }

  _handle_onClick_Create = async() => {
    const { UserAccount_Identifier, User_Secret } = this.state

    this.setState({
      currentOperation: 'creating',
      User_Secret: '', // In order to prevent the password from being accessed later
    })

    try {
      const loc = window.location
      const host = loc.protocol + '//' + loc.hostname + ':' + loc.port

      const response = await fetch( host + '/auth/createuser', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserAccount_Identifier: UserAccount_Identifier,
          User_Secret: User_Secret,
        }),
      })

      const responseData = await response.json()

      console.log( 'CREATE USER RESPONSE' )
      console.log( responseData )

      if ( responseData.success ) {
        // In case of success, notify user
        this.setState({ currentOperation: 'success' })
      } else {
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage: responseData.error,
        })
      }
    } catch ( err ) {
      // In case response could not be received properly, tell the user
      // In case of error, tell user what the error is
      this.setState({
        currentOperation: 'failure',
        errorMessage:
          'Did not receive proper response from server. Please try again. Message:' + err.message,
      })
    }
  }

  _handle_onClick_CancelCreation = () => {
    this.setState({
      currentOperation: 'failure',
      errorMessage: 'User creation has been canceled',
    })
  }

  _handle_onClick_TryAgain = () => {
    this.setState({
      currentOperation: 'prompt',
      errorMessage: '',
    })
  }

  _handle_onClick_Continue = () => {
    window.location.replace( '/' )
  }

  renderCreating() {
    const { classes } = this.props
    const { UserAccount_Identifier } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <CardContent>
          <Typography component="p">
            Creating user
            <span class={classes.userName}>{UserAccount_Identifier}</span>, please wait.
          </Typography>
          <br />
          <br />
          <LinearProgress mode="query" />
        </CardContent>
        <CardActions>
          <Button onClick={this._handle_onClick_CancelCreation}>Cancel</Button>
        </CardActions>
      </Card>
    )
  }

  renderSuccess() {
    const { classes } = this.props
    const { UserAccount_Identifier } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <CardContent>
          <Typography component="p">
            Created user
            <span class={classes.userName}>{UserAccount_Identifier}</span>.
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this._handle_onClick_Continue}>Continue</Button>
        </CardActions>
      </Card>
    )
  }

  renderFailure() {
    const { classes } = this.props
    const { UserAccount_Identifier, errorMessage } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Creating user" />
        <CardContent>
          <Typography component="p">
            Failed creating user
            <span class={classes.userName}>{UserAccount_Identifier}</span>
            because {errorMessage}.
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={this._handle_onClick_TryAgain}>Try Again</Button>
        </CardActions>
      </Card>
    )
  }

  renderPrompt() {
    const { classes } = this.props
    const { UserAccount_Identifier, User_Secret } = this.state

    return (
      <Card className={classes.card}>
        <CardHeader title="Create New User" />
        <CardContent>
          <TextField
            label="E-Mail Address"
            fullWidth={true}
            value={UserAccount_Identifier}
            onChange={event => this.setState({ UserAccount_Identifier: event.target.value })}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth={true}
            value={User_Secret}
            onChange={event => this.setState({ User_Secret: event.target.value })}
          />
        </CardContent>
        <CardActions>
          <Button onClick={this._handle_onClick_Create}>Create</Button>
        </CardActions>
      </Card>
    )
  }

  render() {
    const { currentOperation } = this.state

    return (
      <ResponsiveContentArea>
        {currentOperation === 'prompt' && this.renderPrompt()}
        {currentOperation === 'creating' && this.renderCreating()}
        {currentOperation === 'success' && this.renderSuccess()}
        {currentOperation === 'failure' && this.renderFailure()}
      </ResponsiveContentArea>
    )
  }
}

export default withStyles( styles )( NewUserScreen )
