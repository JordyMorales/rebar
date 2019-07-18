/**
 * 
 * @relayHash 01473e9685d7de1ed8d1e512ef303edd
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type EnsayoAddInput = {|
                Ensayo_Title: string,
                Ensayo_Description: string,
                Ensayo_Content: string,
                clientMutationId?: ?string,
              |};
              export type EnsayoAddMutationVariables = {|
                input: EnsayoAddInput
              |};
              export type EnsayoAddMutationResponse = {|
                +EnsayoAdd: ?{|
                  +Viewer: ?{|
                    +id: string
                  |},
                  +EnsayosEdge: ?{|
                    +cursor: string,
                    +node: ?{|
                      +id: string,
                      +Ensayo_Title: ?string,
                      +Ensayo_Description: ?string,
                      +Ensayo_Content: ?string,
                    |},
                  |},
                |}
              |};
              export type EnsayoAddMutation = {|
                variables: EnsayoAddMutationVariables,
                response: EnsayoAddMutationResponse,
              |};
              */


/*
                 mutation EnsayoAddMutation(
                   $input: EnsayoAddInput!
                 ) {
                   EnsayoAdd(input: $input) {
                     Viewer {
                       id
                     }
                     EnsayosEdge {
                       cursor
                       node {
                         id
                         Ensayo_Title
                         Ensayo_Description
                         Ensayo_Content
                       }
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EnsayoAddInput!",
    "defaultValue": null }],


  v1 = {
    "kind": "ScalarField",
    "alias": null,
    "name": "id",
    "args": null,
    "storageKey": null },

  v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "EnsayoAdd",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input" }],


    "concreteType": "EnsayoAddPayload",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "Viewer",
      "storageKey": null,
      "args": null,
      "concreteType": "Viewer",
      "plural": false,
      "selections": [
      v1 /*: any*/] },


    {
      "kind": "LinkedField",
      "alias": null,
      "name": "EnsayosEdge",
      "storageKey": null,
      "args": null,
      "concreteType": "EnsayosEdge",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null },

      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Ensayo",
        "plural": false,
        "selections": [
        v1 /*: any*/,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Ensayo_Title",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Ensayo_Description",
          "args": null,
          "storageKey": null },

        {
          "kind": "ScalarField",
          "alias": null,
          "name": "Ensayo_Content",
          "args": null,
          "storageKey": null }] }] }] }];








  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "EnsayoAddMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0 /*: any*/,
      "selections": v2 /*: any*/ },

    "operation": {
      "kind": "Operation",
      "name": "EnsayoAddMutation",
      "argumentDefinitions": v0 /*: any*/,
      "selections": v2 /*: any*/ },

    "params": {
      "operationKind": "mutation",
      "name": "EnsayoAddMutation",
      "id": null,
      "text": "mutation EnsayoAddMutation(\n  $input: EnsayoAddInput!\n) {\n  EnsayoAdd(input: $input) {\n    Viewer {\n      id\n    }\n    EnsayosEdge {\n      cursor\n      node {\n        id\n        Ensayo_Title\n        Ensayo_Description\n        Ensayo_Content\n      }\n    }\n  }\n}\n",
      "metadata": {} } };


}();
// prettier-ignore
node /*: any*/.hash = 'ea5acd7697360f56ea79ddb77f8ad1bc';
module.exports = node;
//# sourceMappingURL=EnsayoAddMutation.graphql.js.map