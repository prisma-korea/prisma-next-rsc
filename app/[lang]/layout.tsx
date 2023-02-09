import '../../styles/output.css';

import type {ReactElement, ReactNode} from 'react';

import type {Locale} from '~/lib/i18n';
import Providers from './Providers';

type Props = {
  children: ReactNode;
  params: {lang: Locale};
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
        <Providers initialLocale={lang}>
          <div className="w-screen h-screen bg-paper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
