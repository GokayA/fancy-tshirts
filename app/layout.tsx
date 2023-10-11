import { Analytics } from '@vercel/analytics/react';

import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import Providers from '@/components/Providers';
const inter = Lato({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Fancy Tshirts',
  description: 'E-commerce website generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
