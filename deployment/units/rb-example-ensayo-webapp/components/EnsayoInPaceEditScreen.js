"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _styles = require("@material-ui/core/styles");

var _Plus = _interopRequireDefault(require("mdi-material-ui/Plus"));
var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _EnsayoAddMutation = _interopRequireDefault(require("../../rb-example-ensayo-client/relay/EnsayoAddMutation"));
var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));

var _EnsayoInPlaceEditProperties = _interopRequireDefault(require("./EnsayoInPlaceEditProperties"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 },

  addNewButton: { float: 'right', marginTop: -58, marginRight: 20 } });


class EnsayoInPaceEditScreen extends _react.default.Component









{
  constructor(props, context) {
    super(props, context);this.




    _handle_updateHandler_Ensayo = EnsayoInPlaceEditProperties => {
      const {
        Ensayo_Title,
        Ensayo_Description,
        Ensayo_Content } =
      EnsayoInPlaceEditProperties;
      const { relay, Viewer } = this.props;

      _EnsayoAddMutation.default.commit(
      relay.environment,
      Viewer,
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content);

    };this.

    _handle_Close_Properties = () => {
      this.setState({ propertiesIsOpen: false });
    };this.

    _handle_onClick_Add = () => {
      this.setState({ propertiesIsOpen: true });
    };this.state = { propertiesIsOpen: false };}

  render() {
    const { classes } = this.props;
    const { propertiesIsOpen } = this.state;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      _react.default.createElement(_Card.default, { className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: "Ensayo", subheader: "List of essays" }),

      _react.default.createElement(_CardContent.default, null,
      _react.default.createElement("div", { className: classes.addNewButton },
      _react.default.createElement(_Fab.default, {
        color: "primary",
        className: classes.button,
        onClick: this._handle_onClick_Add },

      _react.default.createElement(_Plus.default, null))),



      this.props.children),


      propertiesIsOpen &&
      _react.default.createElement(_EnsayoInPlaceEditProperties.default, {
        Ensayo_Title: "",
        Ensayo_Content: "",
        Ensayo_Description: "",
        handlerUpdate: this._handle_updateHandler_Ensayo,
        handlerClose: this._handle_Close_Properties }))));





  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)(EnsayoInPaceEditScreen),
{
  Viewer: function () {return require("./__generated__/EnsayoInPaceEditScreen_Viewer.graphql");} });exports.default = _default;
//# sourceMappingURL=EnsayoInPaceEditScreen.js.map