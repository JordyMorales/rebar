/**
 * 
 * @relayHash 5295dc0ca5907421b635b917fa1ebb28
 */

/* eslint-disable */

'use strict';

/*::
              import type { ConcreteRequest } from 'relay-runtime';
              type HomePageScreen_Viewer$ref = any;
              export type routeAppFrameDemo_HomePageScreen_QueryVariables = {||};
              export type routeAppFrameDemo_HomePageScreen_QueryResponse = {|
                +Viewer: ?{|
                  +$fragmentRefs: HomePageScreen_Viewer$ref
                |}
              |};
              export type routeAppFrameDemo_HomePageScreen_Query = {|
                variables: routeAppFrameDemo_HomePageScreen_QueryVariables,
                response: routeAppFrameDemo_HomePageScreen_QueryResponse,
              |};
              */


/*
                 query routeAppFrameDemo_HomePageScreen_Query {
                   Viewer {
                     ...HomePageScreen_Viewer
                     id
                   }
                 }
                 
                 fragment HomePageScreen_Viewer on Viewer {
                   id
                 }
                 */

const node /*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "routeAppFrameDemo_HomePageScreen_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
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
      {
        "kind": "FragmentSpread",
        "name": "HomePageScreen_Viewer",
        "args": null }] }] },





  "operation": {
    "kind": "Operation",
    "name": "routeAppFrameDemo_HomePageScreen_Query",
    "argumentDefinitions": [],
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
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null }] }] },





  "params": {
    "operationKind": "query",
    "name": "routeAppFrameDemo_HomePageScreen_Query",
    "id": null,
    "text": "query routeAppFrameDemo_HomePageScreen_Query {\n  Viewer {\n    ...HomePageScreen_Viewer\n    id\n  }\n}\n\nfragment HomePageScreen_Viewer on Viewer {\n  id\n}\n",
    "metadata": {} } };


// prettier-ignore
node /*: any*/.hash = 'dd5a657362a3fea622cbb7f0dfde2a72';
module.exports = node;
//# sourceMappingURL=routeAppFrameDemo_HomePageScreen_Query.graphql.js.map