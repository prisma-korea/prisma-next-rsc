import {Inter} from '@next/font/google';
import type {ReactElement} from 'react';
import clsx from 'clsx';

const inter = Inter({subsets: ['latin']});

export default function Home(): ReactElement {
  return (
    <main className="role-basic">
      <h1 className={clsx('text-basic', inter.className)}>This is main</h1>
    </main>
  );
}
