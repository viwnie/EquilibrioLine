import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import { Header, Footer } from "./components";
import "./globals.css";

const adelia = localFont({
  src: [
    {
      path: './fonts/adelia.woff',
    }
  ],
  variable: '--font-adelia'
})
export const metadata: Metadata = {
  title: "EquilibrioLine",
  description: "Clínica española de embellecimiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body
        className={`${adelia.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
