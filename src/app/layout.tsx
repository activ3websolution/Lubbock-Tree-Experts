
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import SchemaMarkup from "@/components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lubbock Tree Experts',
    default: 'Lubbock Tree Experts | Professional Tree Service in Lubbock, TX',
  },
  description: "Professional Tree Removal, Tree Trimming, Stump Grinding, and Emergency Tree Services in Lubbock, TX.",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lubbocktreeexperts.com',
    siteName: 'Lubbock Tree Experts',
    images: [
      {
        url: 'https://www.lubbocktreeexperts.com/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubbock Tree Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubbock Tree Experts | Professional Tree Service in Lubbock, TX',
    description: 'Your trusted experts for tree removal, tree trimming, and stump grinding in Lubbock, TX.',
    images: ['https://www.lubbocktreeexperts.com/hero.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
        <ExitIntentPopup />
        <SchemaMarkup />
      </body>
    </html>
  );
}
