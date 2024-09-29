import { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutProvider } from '@/contexts/LayoutContext';

interface Props {
  children: ReactNode;
}

// This is the place responsible for grouping all providers from the app
export const MainProvider = ({ children }: Props) => (
  <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      rtl={false}
      pauseOnFocusLoss
      hideProgressBar={true}
      closeOnClick={true}
      pauseOnHover={true}
      draggable={true}
    />
    <NextTopLoader
      color="white"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={false}
      easing="ease"
      speed={200}
      shadow="0 0 10px #2299DD,0 0 5px #2299DD"
    />

    <LayoutProvider>{children}</LayoutProvider>
  </>
);
