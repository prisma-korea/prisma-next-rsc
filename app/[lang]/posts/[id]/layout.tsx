import type {ReactElement, ReactNode} from 'react';

import {i18n} from '~/i18n';

export async function generateStaticParams(): Promise<any> {
  return i18n.locales.map((lang) => ({lang}));
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  return <>{children}</>;
}
