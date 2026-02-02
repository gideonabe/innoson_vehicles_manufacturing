import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'

// Inter (for body text)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


export const metadata: Metadata = {
  title: "Home - Innoson Vehicle Manufacturing",
  description: "Innoson Vehicle Manufacturing is a leading manufacturer of high-quality vehicles. We specialize in the production of innovative and durable vehicles that meet the highest standards of excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
