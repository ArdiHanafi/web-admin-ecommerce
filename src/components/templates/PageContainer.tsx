'use client';

import React, { ReactNode } from 'react';
import { useLayout } from '@/contexts/LayoutContext';
import { classNames } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Footer, Header, SideBar } from '../organisms';

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  const { sidebarOpen } = useLayout();
  const pathname = usePathname();

  const isLoginPath = pathname.includes('login');

  if (isLoginPath) {
    return (
      <main className="bg-base-300">
        <div className="flex h-svh flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    );
  }

  const RenderColorsComponent: React.FC = () => (
    <div className="absolute -left-full -top-full -z-50">
      <div className="size-1 bg-primary" />
      <div className="size-1 bg-secondary" />
      <div className="size-1 bg-base-100" />
      <div className="size-1 bg-base-200" />
      <div className="size-1 bg-base-300" />
      <div className="size-1 bg-success" />
      <div className="size-1 bg-error" />
      <div className="size-1 bg-accent" />
      <div className="size-1 bg-primary-content" />
      <div className="size-1 bg-secondary-content" />
      <div className="size-1 bg-base-content" />
      <div className="size-1 bg-success-content" />
      <div className="size-1 bg-error-content" />
    </div>
  );

  return (
    <>
      <RenderColorsComponent />
      <Header />
      <SideBar />
      <div
        className={classNames(
          'min-h-screen',
          sidebarOpen ? 'lg:pl-72' : 'lg:pl-14'
        )}
      >
        <main className="bg-base-300 py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PageContainer;
