import {H1, H4} from '~/components/Typography';

import {Inter} from '@next/font/google';
import type {Locale} from '~/lib/i18n';
import LocaleSwitcher from '~/components/LocaleSwitcher';
import type {PostsQuery} from '~/lib/__generated__/PostsQuery.graphql';
import PostsQueryNode from '~/lib/__generated__/PostsQuery.graphql';
import type {ReactElement} from 'react';
import TempClientQueryComponent from '~/components/TempClientComponent';
import clsx from 'clsx';
import {getTranslates} from '~/lib/utils/getTranslation';
import loadSerializableQuery from '~/lib/relay/loadSerializableQuery';

const inter = Inter({subsets: ['latin']});

type Props = {
  params: {lang: Locale};
};

export default async function Page({
  params: {lang},
}: Props): Promise<ReactElement> {
  const {index} = await getTranslates(lang);
  const preloadedQuery = await loadSerializableQuery<
    typeof PostsQueryNode,
    PostsQuery
  >(PostsQueryNode.params, {});

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <H1 className={clsx('text-h1', 'mb-8', inter.className)}>
        {index.title}
      </H1>

      <div>
        <LocaleSwitcher />
      </div>
      <div>
        <H4 className={clsx('text-h2', 'mb-4', inter.className)}>
          {index.post_list}
        </H4>
        <TempClientQueryComponent preloadedQuery={preloadedQuery} />
      </div>
    </div>
  );
}
/* https://beta.nextjs.org/docs/api-reference/segment-config#revalidate */
