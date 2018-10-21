"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _Route = _interopRequireDefault(require("found/lib/Route"));
var _react = _interopRequireDefault(require("react"));
var _reactRelay = require("react-relay");

var _AppFrame = _interopRequireDefault(require("../../_configuration/rb-appbase-webapp/AppFrame"));
var _routesAppFrame = _interopRequireDefault(require("../../_configuration/rb-appbase-webapp/routesAppFrame"));
var _routesRoot = _interopRequireDefault(require("../../_configuration/rb-appbase-webapp/routesRoot"));var _graphql;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

siteConfiguration => {
  return (
    _react.default.createElement(_Route.default, { path: "/" },
    _react.default.createElement(_Route.default, {
      path: "/",
      Component: _AppFrame.default,
      query: _graphql || (_graphql = function () {return require("./__generated__/createDefaultRoutes_AppFrame_Query.graphql");}) },







    _routesAppFrame.default),

    _routesRoot.default.length > 0 && _routesRoot.default));


};exports.default = _default;
//# sourceMappingURL=createDefaultRoutes.js.map