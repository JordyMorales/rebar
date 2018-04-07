



/* eslint-disable */

'use strict';

/*::
              import type { ConcreteFragment } from 'relay-runtime';
              import type { FragmentReference } from 'relay-runtime';
              declare export opaque type EnsayoPublicList_Viewer$ref: FragmentReference;
              export type EnsayoPublicList_Viewer = {|
                +Ensayos: ?{|
                  +edges: ?$ReadOnlyArray<?{|
                    +node: ?{|
                      +id: string,
                      +Ensayo_Title: ?string,
                      +Ensayo_Description: ?string,
                    |},
                  |}>,
                |},
                +$refType: EnsayoPublicList_Viewer$ref,
              |};
              */


const node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EnsayoPublicList_Viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
    {
      "count": null,
      "cursor": null,
      "direction": "forward",
      "path": [
      "Ensayos"] }] },




  "argumentDefinitions": [],
  "selections": [
  {
    "kind": "LinkedField",
    "alias": "Ensayos",
    "name": "__EnsayoPublicList_Ensayos_connection",
    "storageKey": null,
    "args": null,
    "concreteType": "EnsayosConnection",
    "plural": false,
    "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "EnsayosEdge",
      "plural": true,
      "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Ensayo",
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
          "name": "__typename",
          "args": null,
          "storageKey": null }] },



      {
        "kind": "ScalarField",
        "alias": null,
        "name": "cursor",
        "args": null,
        "storageKey": null }] },



    {
      "kind": "LinkedField",
      "alias": null,
      "name": "pageInfo",
      "storageKey": null,
      "args": null,
      "concreteType": "PageInfo",
      "plural": false,
      "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "endCursor",
        "args": null,
        "storageKey": null },

      {
        "kind": "ScalarField",
        "alias": null,
        "name": "hasNextPage",
        "args": null,
        "storageKey": null }] }] }] };







node /*: any*/.hash = '57408f235362c09e18e90877cbe309bc';
module.exports = node;
//# sourceMappingURL=EnsayoPublicList_Viewer.graphql.js.map