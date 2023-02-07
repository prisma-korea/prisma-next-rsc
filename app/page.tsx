import {Inter} from '@next/font/google';
import type {PostsQuery} from '~/lib/__generated__/PostsQuery.graphql';
import PostsQueryNode from '~/lib/__generated__/PostsQuery.graphql';
import type {ReactElement} from 'react';
import RootClientQueryComponent from './RootClientQueryComponent';
import clsx from 'clsx';
import loadSerializableQuery from '~/lib/relay/loadSerializableQuery';

const inter = Inter({subsets: ['latin']});

export default async function Page(): Promise<ReactElement> {
  const preloadedQuery = await loadSerializableQuery<
    typeof PostsQueryNode,
    PostsQuery
  >(PostsQueryNode.params, {
    owner: 'facebook',
    name: 'relay',
  });

  return <RootClientQueryComponent preloadedQuery={preloadedQuery} />;
}

export const revalidate = 0;
