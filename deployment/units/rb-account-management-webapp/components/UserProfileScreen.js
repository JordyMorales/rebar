"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _found = require("found");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _UserUpdateMutation = _interopRequireDefault(require("../../rb-account-management-client/relay/UserUpdateMutation"));
var _RequiresAuthentication = _interopRequireDefault(require("../../rb-account-management-webapp/components/RequiresAuthentication"));
var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

//

const styles = {
  card: { minWidth: 320 }


  //
};
class UserProfileScreen extends _react.default.Component
















{
  constructor(props, context) {
    super(props, context);_initialiseProps.call(this);

    const {
      User_DisplayName,
      User_PrimaryEmail,
      User_PrimaryPhone } =
    props.Viewer;

    this.state = { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone };
  }







































  render() {
    const { classes, Viewer } = this.props;

    if (Viewer.User_IsAnonymous) return _react.default.createElement(_RequiresAuthentication.default, null);

    const {
      User_DisplayName,
      User_PrimaryEmail,
      User_PrimaryPhone } =
    this.state;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "User Profile" }),

      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_TextField.default, {
        autoComplete: "name",
        fullWidth: true,
        label: "Display Name",
        margin: "normal",
        value: User_DisplayName,
        variant: "outlined",
        onChange: this._handle_onChange_DisplayName }),


      _react.default.createElement(_TextField.default, {
        autoComplete: "email",
        fullWidth: true,
        label: "Contact email (not account identifier)",
        margin: "normal",
        value: User_PrimaryEmail,
        variant: "outlined",
        onChange: this._handle_onChange_PrimaryEmail }),


      _react.default.createElement(_TextField.default, {
        autoComplete: "tel",
        fullWidth: true,
        label: "Contact phone",
        margin: "normal",
        value: User_PrimaryPhone,
        variant: "outlined",
        onChange: this._handle_onChange_PrimaryPhone })),



      _react.default.createElement(_CardActions.default, null,
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_Update }, "Update"),
      _react.default.createElement(_Button.default, { onClick: this._handle_onClick_ChangePassword }, "Change password")))));






  }}var _initialiseProps = function () {this._handle_onChange_DisplayName = event => {const User_DisplayName = event.target.value;this.setState({ User_DisplayName });};this._handle_onChange_PrimaryEmail = event => {const User_PrimaryEmail = event.target.value;this.setState({ User_PrimaryEmail });};this._handle_onChange_PrimaryPhone = event => {const User_PrimaryPhone = event.target.value;this.setState({ User_PrimaryPhone });};this._handle_onClick_ChangePassword = () => {this.props.router.push('/user/change-secret');};this._handle_onClick_Update = () => {const { User_DisplayName, User_PrimaryEmail, User_PrimaryPhone } = this.state;const { relay } = this.props;_UserUpdateMutation.default.commit(relay.environment, User_DisplayName, User_PrimaryEmail, User_PrimaryPhone);};};var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)((0, _found.withRouter)(UserProfileScreen)), { Viewer: function () {return require("./__generated__/UserProfileScreen_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=UserProfileScreen.js.map