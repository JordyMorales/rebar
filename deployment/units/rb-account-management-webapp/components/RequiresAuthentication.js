"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.registerAuthenticationRequiredCallback = registerAuthenticationRequiredCallback;exports.unregisterAuthenticationRequiredCallback = unregisterAuthenticationRequiredCallback;exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _styles = require("@material-ui/core/styles");

var _ShieldKeyOutline = _interopRequireDefault(require("mdi-material-ui/ShieldKeyOutline"));
var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _CompositeCardHeader = _interopRequireWildcard(require("../../rb-appbase-webapp/components/CompositeCardHeader"));


var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;} else {var newObj = {};if (obj != null) {for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}}newObj.default = obj;return newObj;}}function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const doNothing = () => {};

let authenticationRequiredCallback = doNothing;

function registerAuthenticationRequiredCallback(cb) {
  authenticationRequiredCallback = cb;
}

function unregisterAuthenticationRequiredCallback() {
  authenticationRequiredCallback = doNothing;
}

//

const styles = theme => ({
  card: {
    minWidth: 350,
    maxWidth: 1200 },

  ..._CompositeCardHeader.cardHeaderContentStyles });


//

class RequiresAuthenticationNotice extends _react.default.Component

{
  componentDidMount() {
    authenticationRequiredCallback();
  }

  render() {
    const { classes } = this.props;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_CompositeCardHeader.default, {
        icon: _react.default.createElement(_ShieldKeyOutline.default, { htmlColor: "#003c78" }),
        title: "Please log in" }),


      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement(_Typography.default, { paragraph: true }, "Accessing this area of the application requires you to be logged in.")))));







  }}var _default =


(0, _styles.withStyles)(styles)(RequiresAuthenticationNotice);exports.default = _default;
//# sourceMappingURL=RequiresAuthentication.js.map