



/* eslint-disable */

'use strict';

/*::
              import type { ConcreteFragment } from 'relay-runtime';
              import type { FragmentReference } from 'relay-runtime';
              declare export opaque type ToDoItem_ToDo$ref: FragmentReference;
              export type ToDoItem_ToDo = {|
                +id: string,
                +ToDo_Complete: ?boolean,
                +ToDo_Text: ?string,
                +$refType: ToDoItem_ToDo$ref,
              |};
              */


const node /*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ToDoItem_ToDo",
  "type": "ToDo",
  "metadata": null,
  "argumentDefinitions": [],
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
    "name": "ToDo_Complete",
    "args": null,
    "storageKey": null },

  {
    "kind": "ScalarField",
    "alias": null,
    "name": "ToDo_Text",
    "args": null,
    "storageKey": null }] };



node /*: any*/.hash = 'b4582da6b8371980f5147d0ea118c859';
module.exports = node;
//# sourceMappingURL=ToDoItem_ToDo.graphql.js.map