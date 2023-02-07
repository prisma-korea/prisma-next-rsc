import '../styles/output.css';

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
        <div className="bg-basic">{children}</div>
      </body>
    </html>
  );
}
