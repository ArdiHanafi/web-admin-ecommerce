import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/tailwind.css';

import { SessionProvider } from 'next-auth/react';
// import { auth } from '@/auth';
import { MainProvider } from '@/components/providers/MainProvider';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ClientThemeWrapper from '@/contexts/ClientThemeWrapper';
import PageContainer from '@/components/templates/PageContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coffe Dash Admin',
  description: 'Admin Dashboard for Coffe Dash',
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = null;

  return (
    <SessionProvider session={session}>
      <html lang="en" className="min-h-svh">
        <body className={`${inter.className} min-h-svh`}>
          <ThemeProvider>
            <ClientThemeWrapper>
              <MainProvider>
                <PageContainer>{children}</PageContainer>
              </MainProvider>
            </ClientThemeWrapper>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
