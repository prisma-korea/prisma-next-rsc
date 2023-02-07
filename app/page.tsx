import {Inter} from '@next/font/google';
import type {ReactElement} from 'react';

const inter = Inter({subsets: ['latin']});

export default function Home(): ReactElement {
  return (
    <main>
      <h1 className={inter.className}>This is main</h1>
    </main>
  );
}
