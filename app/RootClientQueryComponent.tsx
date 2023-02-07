'use client';

import type {PostsQuery} from '~/lib/__generated__/PostsQuery.graphql';
import type PostsQueryNode from '~/lib/__generated__/PostsQuery.graphql';
import type {ReactElement} from 'react';
import type {SerializablePreloadedQuery} from '~/lib/relay/loadSerializableQuery';
import {Temp} from '~/components/Temp';
import {useRelayEnvironment} from '~/lib/relay';
import useSerializablePreloadedQuery from '~/lib/relay/useSerializableQuery';

export default function RootClientQueryComponent(props: {
  preloadedQuery: SerializablePreloadedQuery<typeof PostsQueryNode, PostsQuery>;
}): ReactElement {
  const environment = useRelayEnvironment();
  const queryRef = useSerializablePreloadedQuery(
    environment,
    props.preloadedQuery,
  );

  return <Temp queryRef={queryRef} />;
}
