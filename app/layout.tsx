import type { Metadata } from 'next';
import './globals.css';
import React, { JSX } from 'react';

import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import { MatchProvider } from '@/components/providers/match-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const tacticSans = localFont({
  src: '../assets/fonts/tactic-sans-regular-italic.woff2',
  weight: '400',
  style: 'italic',
  variable: '--font-tactic-sans', // Добавляем переменную
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${tacticSans.variable} ${inter.variable}`}>
        <MatchProvider>{children}</MatchProvider>
      </body>
    </html>
  );
}
