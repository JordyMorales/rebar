"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _styles = require("@material-ui/core/styles");

var _Inbox = _interopRequireDefault(require("mdi-material-ui/Inbox"));
var _CalendarBlank = _interopRequireDefault(require("mdi-material-ui/CalendarBlank"));
var _Pencil = _interopRequireDefault(require("mdi-material-ui/Pencil"));
var _Contacts = _interopRequireDefault(require("mdi-material-ui/Contacts"));
var _Crosshairs = _interopRequireDefault(require("mdi-material-ui/Crosshairs"));
var _MoveResize = _interopRequireDefault(require("mdi-material-ui/MoveResize"));
var _Lock = _interopRequireDefault(require("mdi-material-ui/Lock"));
var _react = _interopRequireDefault(require("react"));

var _NavMenuItemWithIcon = _interopRequireDefault(require("../../rb-appdrawer-webapp/components/NavMenuItemWithIcon"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = {
  list: {
    width: 250,
    flex: 'initial' } };



class AppDrawerNavItems extends _react.default.Component


{
  render() {
    const { classes, onClick } = this.props;

    return (
      _react.default.createElement("div", null,
      _react.default.createElement(_Divider.default, null),
      _react.default.createElement(_List.default, { className: classes.list },
      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Inbox.default, null),
        label: "To Dos",
        onClick: () => onClick('/todo/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Pencil.default, null),
        label: "Ensayo Edit",
        onClick: () => onClick('/ensayo/in-place-edit/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Contacts.default, null),
        label: "Ensayo Public",
        onClick: () => onClick('/ensayo/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Crosshairs.default, null),
        label: "Inscriptio",
        onClick: () => onClick('/inscriptio/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_CalendarBlank.default, null),
        label: "Translaticiarum",
        onClick: () => onClick('/translaticiarum/') }),

      _react.default.createElement(_Divider.default, null),
      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_MoveResize.default, null),
        label: "Viewport Dimensions",
        onClick: () => onClick('/viewport-dimensions/') }),

      _react.default.createElement(_NavMenuItemWithIcon.default, {
        icon: _react.default.createElement(_Lock.default, null),
        label: "Force Login",
        onClick: () => onClick('/force-login/') }))));




  }}var _default =


(0, _styles.withStyles)(styles)(AppDrawerNavItems);exports.default = _default;
//# sourceMappingURL=AppDrawerNavItems.js.map