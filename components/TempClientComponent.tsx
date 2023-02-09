'use client';

import Link from 'next/link';
import type {PostsQuery} from '~/lib/__generated__/PostsQuery.graphql';
import type PostsQueryNode from '~/lib/__generated__/PostsQuery.graphql';
import type {PreloadedQuery} from 'react-relay';
import type {ReactElement} from 'react';
import type {SerializablePreloadedQuery} from '~/lib/relay/loadSerializableQuery';
import {getCurrentEnvironment} from '~/lib/relay';
import {postsQuery} from '~/lib/relay/queries/Post';
import {useLocaleContext} from './LocaleProvider';
import {usePreloadedQuery} from 'react-relay';
import useSerializablePreloadedQuery from '~/lib/relay/useSerializableQuery';

type Props = {
  queryRef: PreloadedQuery<PostsQuery>;
};

function Component({queryRef}: Props): ReactElement {
  const data = usePreloadedQuery(postsQuery, queryRef);
  const {locale} = useLocaleContext();

  return (
    <div className="flex flex-col">
      {data.posts ? (
        data.posts.map((elm) => (
          <Link
            href={`${locale}/posts/${elm?.id}`}
            key={elm?.id}
            className="mb-4 hover:underline cursor-pointer"
          >
            {elm?.title || 'title'}
          </Link>
        ))
      ) : (
        <p>Try to seed mock data with yarn seed</p>
      )}
    </div>
  );
}

export default function TempClientQueryComponent({
  preloadedQuery,
}: {
  preloadedQuery: SerializablePreloadedQuery<typeof PostsQueryNode, PostsQuery>;
}): ReactElement {
  const environment = getCurrentEnvironment();
  const queryRef = useSerializablePreloadedQuery(environment, preloadedQuery);

  return <Component queryRef={queryRef} />;
}
