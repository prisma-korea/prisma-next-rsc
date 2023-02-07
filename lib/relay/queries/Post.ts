import {graphql} from 'react-relay';

export const postQuery = graphql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      id
      title
      content
    }
  }
`;

export const postsQuery = graphql`
  query PostsQuery {
    posts {
      id
      title
      content
    }
  }
`;
