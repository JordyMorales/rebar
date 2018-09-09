/**
 * 
 * @relayHash b77f2a0a45271111502a0fd1aaec21ad
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              export type ToDoUpdateRenameInput = {
                id: string,
                ToDo_Text: string,
                clientMutationId?: ?string,
              };
              export type ToDoUpdateRenameMutationVariables = {|
                input: ToDoUpdateRenameInput
              |};
              export type ToDoUpdateRenameMutationResponse = {|
                +ToDoUpdateRename: ?{|
                  +ToDo: ?{|
                    +id: string,
                    +ToDo_Text: ?string,
                  |}
                |}
              |};
              export type ToDoUpdateRenameMutation = {|
                variables: ToDoUpdateRenameMutationVariables,
                response: ToDoUpdateRenameMutationResponse,
              |};
              */


/*
                 mutation ToDoUpdateRenameMutation(
                   $input: ToDoUpdateRenameInput!
                 ) {
                   ToDoUpdateRename(input: $input) {
                     ToDo {
                       id
                       ToDo_Text
                     }
                   }
                 }
                 */

const node /*: ConcreteRequest*/ = function () {
  var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ToDoUpdateRenameInput!",
    "defaultValue": null }],


  v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "ToDoUpdateRename",
    "storageKey": null,
    "args": [
    {
      "kind": "Variable",
      "name": "input",
      "variableName": "input",
      "type": "ToDoUpdateRenameInput!" }],


    "concreteType": "ToDoUpdateRenamePayload",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "ToDo",
      "storageKey": null,
      "args": null,
      "concreteType": "ToDo",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "ToDo_Text",
        "args": null,
        "storageKey": null }] }] }];






  return {
    "kind": "Request",
    "operationKind": "mutation",
    "name": "ToDoUpdateRenameMutation",
    "id": null,
    "text": "mutation ToDoUpdateRenameMutation(\n  $input: ToDoUpdateRenameInput!\n) {\n  ToDoUpdateRename(input: $input) {\n    ToDo {\n      id\n      ToDo_Text\n    }\n  }\n}\n",
    "metadata": {},
    "fragment": {
      "kind": "Fragment",
      "name": "ToDoUpdateRenameMutation",
      "type": "Mutation",
      "metadata": null,
      "argumentDefinitions": v0,
      "selections": v1 },

    "operation": {
      "kind": "Operation",
      "name": "ToDoUpdateRenameMutation",
      "argumentDefinitions": v0,
      "selections": v1 } };


}();
// prettier-ignore
node /*: any*/.hash = '5ca316bc08f370bba86945985652a644';
module.exports = node;
//# sourceMappingURL=ToDoUpdateRenameMutation.graphql.js.map