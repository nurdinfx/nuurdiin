import type { Metadata } from 'next';
import '../../styles/fonts.css';

import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider';
import Toast from '@/components/Toast/Toast';
import MetaMaskHandler from '@/components/MetaMaskHandler/MetaMaskHandler';

// Import MetaMask error suppression
import '@/libs/metamask';

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className='font-normal'>
        <NextAuthProvider>
          <ThemeProvider>
            <MetaMaskHandler />
            <Toast />
            <main className='font-normal'>
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
