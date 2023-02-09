import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import Providers from './Providers';
import {i18n} from '~/lib/i18n';

type Props = {
  children: ReactNode;
  params: {lang: string};
};

/* this is for static generation */
// export async function generateStaticParams(): Promise<
//   Array<{lang: TupleToUnion<(typeof i18n)['locales']>}>
// > {
//   return i18n.locales.map((locale) => ({lang: locale}));
// }

export default function RootLayout({
  children,
  params: {lang},
}: Props): ReactElement {
  return (
    <html lang={lang}>
      <head />
      <body>
        <Providers>
          <div className="w-screen h-screen bg-paper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
