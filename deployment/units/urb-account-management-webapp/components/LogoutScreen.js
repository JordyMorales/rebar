'use strict';Object.defineProperty(exports, "__esModule", { value: true });

var _Button = require('@material-ui/core/Button');var _Button2 = _interopRequireDefault(_Button);

var _Card = require('@material-ui/core/Card');var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@material-ui/core/CardContent');var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardHeader = require('@material-ui/core/CardHeader');var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _LinearProgress = require('@material-ui/core/LinearProgress');var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _styles = require('@material-ui/core/styles');

var _Typography = require('@material-ui/core/Typography');var _Typography2 = _interopRequireDefault(_Typography);

var _react = require('react');var _react2 = _interopRequireDefault(_react);

var _ResponsiveContentArea = require('../../urb-appbase-webapp/components/ResponsiveContentArea');var _ResponsiveContentArea2 = _interopRequireDefault(_ResponsiveContentArea);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 400 } });



class LogoutScreen extends _react2.default.Component







{
  constructor(props, context) {
    super(props, context);this.







    _handle_onClick_Logout = async () => {
      this.setState({ currentOperation: 'logging out' });

      try {
        const loc = window.location;
        const host = loc.protocol + '//' + loc.hostname + ':' + loc.port;

        const response = await fetch(host + '/auth/logout', {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json' },

          body: '{}' });


        const responseData = await response.json();

        console.log('LOGOUT USER RESPONSE');
        console.log(responseData);

        if (responseData.success) {
          // In case of success, notify user
          this.setState({ currentOperation: 'success' });
        } else {
          // In case of error, tell user what the error is
          this.setState({
            currentOperation: 'failure',
            errorMessage: responseData.error });

        }
      } catch (err) {
        // In case response could not be received properly, tell the user
        // In case of error, tell user what the error is
        this.setState({
          currentOperation: 'failure',
          errorMessage:
          'Did not receive proper response from server. Please try again. Message:' + err.message });

      }
    };this.

    _handle_onClick_CancelLogout = () => {
      this.setState({
        currentOperation: 'failure',
        errorMessage: 'User log out has been canceled' });

    };this.

    _handle_onClick_TryAgain = () => {
      this.setState({
        currentOperation: 'confirm',
        errorMessage: '' });

    };this.

    _handle_onClick_Continue = () => {
      window.location.replace('/');
    };this.state = { currentOperation: 'confirm', errorMessage: '' };}

  renderCreating() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_CardHeader2.default, { title: 'Creating user' }),
        _react2.default.createElement(_CardContent2.default, null,
          _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Logging out. Please wait ...'),
          _react2.default.createElement('br', null), ' ', _react2.default.createElement('br', null),
          _react2.default.createElement(_LinearProgress2.default, { mode: 'query' })),

        _react2.default.createElement(_CardActions2.default, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_CancelLogout }, 'Cancel'))));



  }

  renderSuccess() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_CardHeader2.default, { title: 'Logout' }),
        _react2.default.createElement(_CardContent2.default, null,
          _react2.default.createElement(_Typography2.default, { component: 'p' }, 'You have been logged out.')),

        _react2.default.createElement(_CardActions2.default, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_Continue }, 'Continue'))));



  }

  renderFailure() {
    const { classes } = this.props;
    const { errorMessage } = this.state;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_CardHeader2.default, { title: 'Creating user' }),
        _react2.default.createElement(_CardContent2.default, null,
          _react2.default.createElement(_Typography2.default, { component: 'p' }, 'Failed logging out because: ', errorMessage, '!')),

        _react2.default.createElement(_CardActions2.default, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_TryAgain }, 'Try Again'))));



  }

  renderPrompt() {
    const { classes } = this.props;

    return (
      _react2.default.createElement(_Card2.default, { className: classes.card },
        _react2.default.createElement(_CardHeader2.default, { title: 'Log Out' }),
        _react2.default.createElement(_CardContent2.default, null,
          _react2.default.createElement(_Typography2.default, { component: 'p' }, 'You are currently logged in. Are you sure you want to log out?')),



        _react2.default.createElement(_CardActions2.default, null,
          _react2.default.createElement(_Button2.default, { onClick: this._handle_onClick_Logout }, 'Yes, Log Out'))));



  }

  render() {
    const { currentOperation } = this.state;

    return (
      _react2.default.createElement(_ResponsiveContentArea2.default, null,
        currentOperation === 'confirm' && this.renderPrompt(),
        currentOperation === 'logging out' && this.renderCreating(),
        currentOperation === 'success' && this.renderSuccess(),
        currentOperation === 'failure' && this.renderFailure()));


  }}exports.default =


(0, _styles.withStyles)(styles)(LogoutScreen);
//# sourceMappingURL=LogoutScreen.js.map