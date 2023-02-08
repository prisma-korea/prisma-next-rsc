import type {PostQuery} from '~/lib/__generated__/PostQuery.graphql';
import type {PreloadedQuery} from 'react-relay';
import type {ReactElement} from 'react';
import {Suspense} from 'react';
import {postQuery} from '~/lib/relay/queries/Post';
import {usePreloadedQuery} from 'react-relay';

export default function Post(props: {
  queryRef: PreloadedQuery<PostQuery>;
}): ReactElement {
  const data = usePreloadedQuery(postQuery, props.queryRef);

  return (
    <Suspense fallback="Loading (client side)...">
      <div className="flex flex-col justify-center items-center">
        <h1>Title : {data.post?.title}</h1>
        <p>Content: {data.post?.content}</p>
      </div>
    </Suspense>
  );
}
