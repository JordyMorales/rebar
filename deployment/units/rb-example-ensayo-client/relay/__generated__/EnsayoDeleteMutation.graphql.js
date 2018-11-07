/**
 * 
 * @relayHash dcac591f53efb2d09a4b3ad7aea6a64f
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type EnsayoDeleteInput = {
                id: string,
                clientMutationId?: ?string,
              };
              export type EnsayoDeleteMutationVariables = {|
                input: EnsayoDeleteInput
              |};
              export type EnsayoDeleteMutationResponse = {|
                +EnsayoDelete: ?{|
                  +deletedId: ?string
                |}
              |};
              export type EnsayoDeleteMutation = {|
                variables: EnsayoDeleteMutationVariables,
                response: EnsayoDeleteMutationResponse,
              |};
              */


/*
                 mutation EnsayoDeleteMutation(
                   $input: EnsayoDeleteInput!
                 ) {
                   EnsayoDelete(input: $input) {
                     deletedId
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "EnsayoDeleteInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "EnsayoDelete",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "EnsayoDeleteInput!" }],


    "concreteType": "EnsayoDeletePayload",
    "plural": false,
    "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "deletedId",
      "args": null,
      "storageKey": null }] }];




  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "EnsayoDeleteMutation",
    "id": null,
    "text": "mutation EnsayoDeleteMutation(\n  $input: EnsayoDeleteInput!\n) {\n  EnsayoDelete(input: $input) {\n    deletedId\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "EnsayoDeleteMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1 },

    "operation": {
      "kind": "Operation",
      "name": "EnsayoDeleteMutation",
      "argumentDefinitions": v0,
      "selections": v1 } };


}();
// prettier-ignore
node /*: any*/.hash = 'd8c8d964d97d923ef7f0e6c1d21ecfcb';
module.exports = node;
//# sourceMappingURL=EnsayoDeleteMutation.graphql.js.map