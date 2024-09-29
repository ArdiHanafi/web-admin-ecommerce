'use client';

import { useContext } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ThemeContext } from './ThemeContext';

export default function ClientThemeWrapper({ children }: any) {
  const { theme } = useContext(ThemeContext);

  return (
    <div data-theme={theme} className="min-h-svh bg-base-300">
      <SkeletonTheme baseColor={'#141123'} highlightColor={'#1D1933'}>
        {children}
      </SkeletonTheme>
    </div>
  );
}
