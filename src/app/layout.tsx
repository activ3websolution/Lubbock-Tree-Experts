import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Lubbock Tree Experts',
    default: 'Lubbock Tree Experts | Professional Tree Service in Lubbock, TX',
  },
  description: "Professional Tree Removal, Tree Trimming, Stump Grinding, and more in Lubbock, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-brand-charcoal`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
