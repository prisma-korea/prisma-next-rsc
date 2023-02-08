import {H1, H4} from '~/components/Typography';

import {Inter} from '@next/font/google';
import type {PostsQuery} from '~/lib/__generated__/PostsQuery.graphql';
import PostsQueryNode from '~/lib/__generated__/PostsQuery.graphql';
import type {ReactElement} from 'react';
import TempClientQueryComponent from '~/components/TempClientComponent';
import clsx from 'clsx';
import loadSerializableQuery from '~/lib/relay/loadSerializableQuery';

const inter = Inter({subsets: ['latin']});

export default async function Page(): Promise<ReactElement> {
  const preloadedQuery = await loadSerializableQuery<
    typeof PostsQueryNode,
    PostsQuery
  >(PostsQueryNode.params, {});

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <H1 className={clsx('text-h1', 'mb-8', inter.className)}>
        Prisma nextjs graphql
      </H1>
      <div>
        <H4 className={clsx('text-h2', 'mb-4', inter.className)}>Post list</H4>
        <TempClientQueryComponent preloadedQuery={preloadedQuery} />
      </div>
    </div>
  );
}
/* https://beta.nextjs.org/docs/api-reference/segment-config#revalidate */
export const revalidate = 0;
