"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _styles = require("@material-ui/core/styles");

var _found = require("found");
var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _ResponsiveContentArea = _interopRequireDefault(require("../../rb-appbase-webapp/components/ResponsiveContentArea"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

const styles = theme => ({
  card: {
    minWidth: 275 } });



class EnsayoPublicList extends _react.default.Component



{
  _handle_onClick(id) {
    this.context.router.push('/ensayo/item/' + id);
  }

  render() {
    const { classes, Viewer } = this.props;

    return (
      _react.default.createElement(_ResponsiveContentArea.default, null,
      Viewer.Ensayos.edges.map((edge) =>
      _react.default.createElement(_Card.default, { key: edge.node.id, className: classes.card },
      _react.default.createElement(_CardHeader.default, { title: edge.node.Ensayo_Title }),

      _react.default.createElement(_CardContent.default, { onClick: () => this._handle_onClick(edge.node.id) },
      edge.node.Ensayo_Description)))));





  }}var _default =


(0, _reactRelay.createFragmentContainer)(
(0, _styles.withStyles)(styles)((0, _found.withRouter)(EnsayoPublicList)), function () {return require("./__generated__/EnsayoPublicList_Viewer.graphql");});exports.default = _default;
//# sourceMappingURL=EnsayoPublicList.js.map