'use client';

import 'client-only';

import Link from 'next/link';
import type {ReactElement} from 'react';
import {i18n} from '~/lib/i18n';
import {usePathname} from 'next/navigation';

export default function LocaleSwitcher(): ReactElement {
  const pathName = usePathname();
  const redirectedPathName = (locale: string): string => {
    if (!pathName) {
      return '/';
    }

    const segments = pathName.split('/');
    segments[1] = locale;

    return segments.join('/');
  };

  return (
    <div>
      <ul>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
