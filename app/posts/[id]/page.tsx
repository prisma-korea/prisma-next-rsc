import PostClientComponent from './PostClientComponent';
import type {PostQuery} from '~/lib/__generated__/PostQuery.graphql';
import PostQueryNode from '~/lib/__generated__/PostQuery.graphql';
import type {ReactElement} from 'react';
import loadSerializableQuery from '~/lib/relay/loadSerializableQuery';

export default async function PostPage({
  params: {id},
}: {
  params: {id: string};
}): Promise<ReactElement> {
  const preloadedQuery = await loadSerializableQuery<
    typeof PostQueryNode,
    PostQuery
  >(PostQueryNode.params, {id});

  return <PostClientComponent preloadedQuery={preloadedQuery} />;
}

export const revalidate = 0;
