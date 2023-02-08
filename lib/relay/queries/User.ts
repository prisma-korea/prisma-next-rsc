import {graphql} from 'react-relay';

export const userQuery = graphql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      id
      email
      name
      imageUrl
    }
  }
`;

export const userUpdate = graphql`
  mutation UserUpdateUserMutation($userId: ID!, $user: UserUpdateInput!) {
    updateUser(userId: $userId, user: $user) {
      id
      name
      email
      imageUrl
    }
  }
`;
