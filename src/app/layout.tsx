import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaS Master Enterprises — AI-Powered Software Solutions',
  description: 'SaaS Master Enterprises builds enterprise-grade AI platforms. Home of Agent Forge and Vigil.',
  metadataBase: new URL('https://saas-master.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'SaaS Master Enterprises',
    description: 'Enterprise-grade AI platforms for modern businesses.',
    url: 'https://saas-master.com',
    siteName: 'SaaS Master Enterprises',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Master Enterprises',
    description: 'Enterprise-grade AI platforms for modern businesses.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
