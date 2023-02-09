'use client';

import 'client-only';

import type {PostQuery} from '~/lib/__generated__/PostQuery.graphql';
import type {PreloadedQuery} from 'react-relay';
import type {ReactElement} from 'react';
import {Suspense} from 'react';
import type {Translation} from '~/lib/utils/getTranslation';
import {postQuery} from '~/lib/relay/queries/Post';
import {usePreloadedQuery} from 'react-relay';

export default function Post({
  queryRef,
  t,
}: {
  queryRef: PreloadedQuery<PostQuery>;
  t: Translation['post'];
}): ReactElement {
  const data = usePreloadedQuery(postQuery, queryRef);

  return (
    <Suspense fallback="Loading ...">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-h1 mb-4">
          {t.title}: {data.post?.title}
        </h1>
        <p>
          {t.content}: {data.post?.content}
        </p>
      </div>
    </Suspense>
  );
}
