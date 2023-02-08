'use client';

import Post from '~/components/Post';
import type {PostQuery} from '~/lib/__generated__/PostQuery.graphql';
import type PostQueryNode from '~/lib/__generated__/PostQuery.graphql';
import type {ReactElement} from 'react';
import type {SerializablePreloadedQuery} from '~/lib/relay/loadSerializableQuery';
import {getCurrentEnvironment} from '~/lib/relay';
import {useRouter} from 'next/navigation';
import useSerializablePreloadedQuery from '~/lib/relay/useSerializableQuery';

export default function PostClientComponent(props: {
  preloadedQuery: SerializablePreloadedQuery<typeof PostQueryNode, PostQuery>;
}): ReactElement {
  const router = useRouter();
  const environment = getCurrentEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery,
  );

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Post queryRef={queryRef} />
      <button
        type="button"
        className="mt-8 border-[1px] border-solid p-2 rounded"
        onClick={() => router.push('/')}
      >
        Go back
      </button>
    </div>
  );
}
