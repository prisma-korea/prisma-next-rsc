'use client';

import type {Locale} from '~/lib/i18n';
import {LocaleProvider} from '~/components/LocaleProvider';
import {RelayEnvironmentProvider} from 'react-relay';
import {getCurrentEnvironment} from '~/lib/relay';

export default function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}): React.ReactElement {
  const environment = getCurrentEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
    </RelayEnvironmentProvider>
  );
}
