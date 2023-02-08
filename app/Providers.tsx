'use client';

import {RelayEnvironmentProvider} from 'react-relay';
import {getCurrentEnvironment} from '~/lib/relay';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const environment = getCurrentEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
