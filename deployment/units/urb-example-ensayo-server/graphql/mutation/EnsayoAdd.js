"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

var _graphqlRelay = require("graphql-relay");
var _graphql = require("graphql");

var _EnsayosConnection = _interopRequireDefault(require("../type/EnsayosConnection"));
var _ViewerType = _interopRequireDefault(require("../../../../units/urb-appbase-server/graphql/type/ViewerType"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //  weak
var _default =
(0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'EnsayoAdd',

  inputFields: {
    Ensayo_Title: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Ensayo_Description: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) },
    Ensayo_Content: { type: new _graphql.GraphQLNonNull(_graphql.GraphQLString) } },


  outputFields: {
    EnsayosEdge: {
      type: _EnsayosConnection.default.edgeType,
      resolve: async ({ local_id }, { ...args }, context, { rootValue: objectManager }) => {
        const an_Object = await objectManager.getOneObject('Ensayo', {
          id: local_id });


        const arr = await objectManager.getObjectList('Ensayo', {});

        return {
          cursor: objectManager.cursorForObjectInConnection('Ensayo', arr, an_Object),
          node: an_Object };

      } },


    Viewer: {
      type: _ViewerType.default,
      resolve: (parent, args, context, { rootValue: objectManager }) =>
      objectManager.getOneObject('User', {
        id: objectManager.getViewerUserId() }) } },




  mutateAndGetPayload: async (
  { Ensayo_Title, Ensayo_Description, Ensayo_Content },
  context,
  { rootValue: objectManager }) =>
  {
    const local_id = await objectManager.add('Ensayo', {
      Ensayo_Title,
      Ensayo_Description,
      Ensayo_Content });

    return { local_id };
  } });exports.default = _default;
//# sourceMappingURL=EnsayoAdd.js.map