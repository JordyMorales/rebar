"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _ViewerType = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'InscriptioDelete',

  inputFields: {
    id: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLID) } },


  outputFields: {
    deletedId: {
      type: _graphql.GraphQLID,
      resolve: ({ id }) => id },


    Viewer: {
      type: _ViewerType.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async ({ id }, context, { rootValue: objectManager }) => {
    const local_id = (0, _graphqlRelay.fromGlobalId)(id).id;

    await objectManager.remove('Inscriptio', { id: local_id });

    return { id };
  } });exports.default = _default;
//# sourceMappingURL=InscriptioDelete.js.map