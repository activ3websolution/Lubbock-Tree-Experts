import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: 'Lubbock Tree Experts',
  description: 'Professional Tree Service in Lubbock, TX',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
