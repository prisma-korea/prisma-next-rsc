/**
 * @generated SignedSource<<5ae5e5b27b9e131502b271ac47cfa8ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PostQuery$variables = {
  id: string;
};
export type PostQuery$data = {
  readonly post: {
    readonly content: string;
    readonly id: string;
    readonly title: string;
  } | null;
};
export type PostQuery = {
  response: PostQuery$data;
  variables: PostQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "post",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "325178aed570eab32d10ef842e175e4b",
    "id": null,
    "metadata": {},
    "name": "PostQuery",
    "operationKind": "query",
    "text": "query PostQuery(\n  $id: ID!\n) {\n  post(id: $id) {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "10f923f92d111825470ba8cd0f882817";

export default node;
