import type {PostsQuery} from '~/lib/__generated__/PostsQuery.graphql';
import type {PreloadedQuery} from 'react-relay';
import type {ReactElement} from 'react';
import {Suspense} from 'react';
import {postsQuery} from '~/lib/relay/queries/Post';
import {usePreloadedQuery} from 'react-relay';

type Props = {
  queryRef: PreloadedQuery<PostsQuery>;
};

export function Temp({queryRef}: Props): ReactElement {
  const data = usePreloadedQuery(postsQuery, queryRef);

  return (
    <Suspense fallback="Loading (client side)...">
      <div>
        {data.posts ? (
          data.posts.map((elm) => (
            <div key={elm?.id}>{elm?.title || 'title'}</div>
          ))
        ) : (
          <p>Seed data first!</p>
        )}
      </div>
    </Suspense>
  );
}
