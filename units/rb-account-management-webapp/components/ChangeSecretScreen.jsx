// @flow

import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'

import CardActions from '@material-ui/core/CardActions'

import CardContent from '@material-ui/core/CardContent'

import LinearProgress from '@material-ui/core/LinearProgress'

import { withStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'

import Typography from '@material-ui/core/Typography'

import IconLockReset from 'mdi-material-ui/LockReset'
import React from 'react'

import CompositeCardHeader, {
  cardHeaderContentStyles
} from '../../rb-appbase-webapp/components/CompositeCardHeader'
import ResponsiveContentArea from '../../rb-appbase-webapp/components/ResponsiveContentArea'

import NewUserSecretInput from './NewUserSecretInput'

//

const styles = {
  card: {
    minWidth: 350,
    maxWidth: 1200
  },
  ...cardHeaderContentStyles
}

//

class ChangeSecretScreen extends React.Component<
  {
    classes: Object
  },
  {
    currentOperation: 'prompt' | 'changing' | 'success' | 'failure',
    executionStatus: string,
    User_CurrentSecret: string,
    User_NewSecret: string
  }
> {
  constructor(props: Object, context: Object) {
    super(props, context)

    this.state = {
      currentOperation: 'prompt',
      executionStatus: '',
      User_CurrentSecret: '',
      User_NewSecret: ''
    }
  }

  _handle_onClick_Change = async() => {
    const { User_CurrentSecret, User_NewSecret } = this.state

    this.setState({
      currentOperation: 'changing'
    })

    try {
      const loc = window.location
      const host = loc.protocol + '//' + loc.hostname + ':' + loc.port

      const response = await fetch(host + '/auth/change-secret', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          User_CurrentSecret,
          User_NewSecret
        })
      })

      const responseData = await response.json()

      if (responseData.success) {
        // In case of success, notify user
        this.setState({ currentOperation: 'success' })
      } else {
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          executionStatus: responseData.error
        })
      }
    } catch (err) {
      // In case response could not be received properly, tell the user
      // In case of error, tell user what the error is
      this.setState({
        currentOperation: 'failure',
        executionStatus:
          'Did not receive proper response from server. Please try again. Message:' +
          err.message
      })
    }
  }

  _handle_onClick_CancelChange = () => {
    this.setState({
      currentOperation: 'failure',
      executionStatus: 'User creation has been canceled'
    })
  }

  _handle_onClick_TryAgain = () => {
    this.setState({
      User_CurrentSecret: '',
      currentOperation: 'prompt',
      executionStatus: ''
    })
  }

  _handle_onClick_Continue = () => {
    window.location.replace('/user/profile')
  }

  renderChanging() {
    const { classes } = this.props

    return (
      <div>
        <CompositeCardHeader
          icon={<IconLockReset htmlColor="#003c78" />}
          title="Changing password"
        />

        <Card className={classes.card} raised={true}>
          <CardContent>
            <Typography component="p">Updating, please wait.</Typography>
            <br />
            <br />
            <LinearProgress mode="query" />
          </CardContent>
          <CardActions>
            <Button onClick={this._handle_onClick_CancelChange}>Cancel</Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  renderSuccess() {
    const { classes } = this.props

    return (
      <div>
        <CompositeCardHeader
          icon={<IconLockReset htmlColor="#003c78" />}
          title="Password changed"
        />

        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Password successfully changed.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this._handle_onClick_Continue}>Continue</Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  renderFailure() {
    const { classes } = this.props
    const { executionStatus } = this.state

    return (
      <div>
        <CompositeCardHeader
          icon={<IconLockReset htmlColor="#003c78" />}
          title="Failed to change password"
        />

        <Card className={classes.card}>
          <CardContent>
            <Typography component="p">
              Changing password failed because {executionStatus}.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this._handle_onClick_TryAgain}>Try Again</Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  _handle_onChange_Identifier = event => {
    const User_CurrentSecret = event.target.value

    this.setState({ User_CurrentSecret })
  }

  _handle_onUpdateSecret = secret => {
    this.setState({ User_NewSecret: secret })
  }

  renderPrompt() {
    const { classes } = this.props
    const { User_CurrentSecret, User_NewSecret } = this.state

    // User account identifier must be valid and secret must be present
    const createDisabled =
      User_CurrentSecret.length < 5 || User_NewSecret === ''

    return (
      <div>
        <CompositeCardHeader
          icon={<IconLockReset htmlColor="#003c78" />}
          title="Change password"
        />

        <Card className={classes.card}>
          <CardContent>
            <TextField
              autoComplete="password"
              fullWidth={true}
              label="Current (old) password"
              margin="normal"
              type="password"
              value={User_CurrentSecret}
              variant="outlined"
              onChange={this._handle_onChange_Identifier}
            />

            <br />
            <br />

            <NewUserSecretInput onUpdateSecret={this._handle_onUpdateSecret} />
          </CardContent>
          <CardActions>
            <Button
              disabled={createDisabled}
              onClick={this._handle_onClick_Change}
            >
              Change
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }

  render() {
    const { currentOperation } = this.state

    return (
      <ResponsiveContentArea>
        {currentOperation === 'prompt' && this.renderPrompt()}
        {currentOperation === 'changing' && this.renderChanging()}
        {currentOperation === 'success' && this.renderSuccess()}
        {currentOperation === 'failure' && this.renderFailure()}
      </ResponsiveContentArea>
    )
  }
}

export default withStyles(styles)(ChangeSecretScreen)
