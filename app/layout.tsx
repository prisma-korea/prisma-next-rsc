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
      <body>
        <Providers>
          <div className="w-screen h-screen bg-paper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
