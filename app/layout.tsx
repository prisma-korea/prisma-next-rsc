'use client';

import '../styles/output.css';

import Providers from './providers';
import type {ReactElement} from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body>
          <div className="bg-basic">{children}</div>
        </body>
      </Providers>
    </html>
  );
}
