'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.default =





defaultRequestLoggerGraphQL;var _debug = require('../_configuration/debug');var _log = require('../urb-base-server/log');var _log2 = _interopRequireDefault(_log);var _matchInDepth = require('../urb-base-universal/matchInDepth');var _matchInDepth2 = _interopRequireDefault(_matchInDepth);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function defaultRequestLoggerGraphQL(requestAndResponse) {
  let logLevel = null;

  // If there is an error, log it as an error
  if (requestAndResponse.response.indexOf('"errors": [') > 0) logLevel = 'error';else
  if ((0, _matchInDepth2.default)(requestAndResponse, _debug.debugWriteToLogServerRequestGraphQL))
    // Otherwise, if it is a trace, log it as info
    logLevel = 'info';

  if (logLevel) _log2.default.log(logLevel, 'GraphQL request', requestAndResponse);
} //  weak
//# sourceMappingURL=defaultRequestLoggerGraphQL.js.map