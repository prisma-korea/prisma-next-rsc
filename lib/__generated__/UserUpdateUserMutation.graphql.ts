/**
 * @generated SignedSource<<6529caf45fc8804b8ea0209828ac38fa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserUpdateInput = {
  email?: string | null;
  gender?: any | null;
  imageUrl?: string | null;
  name?: string | null;
};
export type UserUpdateUserMutation$variables = {
  user: UserUpdateInput;
  userId: string;
};
export type UserUpdateUserMutation$data = {
  readonly updateUser: {
    readonly email: string | null;
    readonly id: string;
    readonly imageUrl: string | null;
    readonly name: string | null;
  } | null;
};
export type UserUpdateUserMutation = {
  response: UserUpdateUserMutation$data;
  variables: UserUpdateUserMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "user"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "updateUser",
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
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageUrl",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserUpdateUserMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserUpdateUserMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2fb3f6bedd705d2c7b4fc55477fcbfa8",
    "id": null,
    "metadata": {},
    "name": "UserUpdateUserMutation",
    "operationKind": "mutation",
    "text": "mutation UserUpdateUserMutation(\n  $userId: ID!\n  $user: UserUpdateInput!\n) {\n  updateUser(userId: $userId, user: $user) {\n    id\n    name\n    email\n    imageUrl\n  }\n}\n"
  }
};
})();

(node as any).hash = "66ece4ffaaa680ddfcc89598389ae258";

export default node;
