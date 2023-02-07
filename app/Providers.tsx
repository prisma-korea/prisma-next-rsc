'use client';

import type {ReactElement, ReactNode} from 'react';

import {RelayEnvironmentProvider} from 'react-relay';
import {useRelayEnvironment} from '~/lib/relay';

export default function Providers({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const environment = useRelayEnvironment();

  return (
    <RelayEnvironmentProvider environment={environment}>
      {children}
    </RelayEnvironmentProvider>
  );
}
