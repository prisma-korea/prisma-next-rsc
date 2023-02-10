import type {Locale} from '~/lib/i18n';
import PostClientComponent from './PostClientComponent';
import type {PostQuery} from '~/lib/__generated__/PostQuery.graphql';
import PostQueryNode from '~/lib/__generated__/PostQuery.graphql';
import type {ReactElement} from 'react';
import {getTranslates} from '~/lib/utils/getTranslation';
import loadSerializableQuery from '~/lib/relay/loadSerializableQuery';

type Props = {
  params: {lang: Locale; id: string};
};

export default async function PostPage({
  params: {id, lang},
}: Props): Promise<ReactElement> {
  const {post, common} = await getTranslates(lang);
  const preloadedQuery = await loadSerializableQuery<
    typeof PostQueryNode,
    PostQuery
  >(PostQueryNode.params, {id});

  return (
    <PostClientComponent preloadedQuery={preloadedQuery} t={{post, common}} />
  );
}
