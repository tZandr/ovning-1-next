import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NordHost',
  description: 'Pålitlig serverhosting för ditt företag',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-950 text-white">
        <NavBar />
        <main className="flex-1 bg-gradient-to-b from-slate-900 to-black-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
