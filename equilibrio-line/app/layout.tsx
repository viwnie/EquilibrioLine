import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import Header from "./components/Header"
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
    <html lang="es">
      <body
        className={`${adelia.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
