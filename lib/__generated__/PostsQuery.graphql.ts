/**
 * @generated SignedSource<<b42853083f5a01a1daa14d6c22acc8fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PostsQuery$variables = {};
export type PostsQuery$data = {
  readonly posts: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
    readonly title: string;
  } | null> | null;
};
export type PostsQuery = {
  response: PostsQuery$data;
  variables: PostsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "posts",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "b77540072e1312d6946429e7f38e693b",
    "id": null,
    "metadata": {},
    "name": "PostsQuery",
    "operationKind": "query",
    "text": "query PostsQuery {\n  posts {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "d06a52738e0b81daa20486c445b115b4";

export default node;
