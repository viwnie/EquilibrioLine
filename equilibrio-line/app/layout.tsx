import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Header, Footer } from "./components/";
import StructuredData from "./components/StructuredData";
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
  metadataBase: new URL('https://equilibrioline.com'),
  title: "EquilibrioLine - Clínica Estética en Molina de Segura, Murcia",
  description: "Clínica estética especializada en tratamientos corporales y faciales avanzados con tecnología de vanguardia. Adelgazamiento, rejuvenecimiento, reducción de celulitis y reafirmación en Molina de Segura, Murcia. Resultados visibles desde la primera sesión con equipos de última generación.",
  keywords: ["clínica estética", "tratamientos faciales", "tratamientos corporales", "adelgazamiento", "rejuvenecimiento", "celulitis", "reafirmación", "Molina de Segura", "Murcia", "estética avanzada", "tecnología médica", "belleza", "cuidado facial", "cuidado corporal"],
  authors: [{ name: "EquilibrioLine" }],
  creator: "EquilibrioLine",
  publisher: "EquilibrioLine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://equilibrioline.com',
    siteName: 'EquilibrioLine',
    title: 'EquilibrioLine - Clínica Estética en Molina de Segura, Murcia',
    description: 'Clínica estética especializada en tratamientos corporales y faciales avanzados con tecnología de vanguardia.',
    images: [
      {
        url: 'https://equilibrioline.com/assets/hero/Hero_EquilibrioLine.png',
        width: 1200,
        height: 630,
        alt: 'EquilibrioLine - Clínica Estética',
      },
    ],
  },
  alternates: {
    canonical: 'https://equilibrioline.com',
    languages: {
      'es-ES': 'https://equilibrioline.com',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <head>
        <StructuredData />
      </head>
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
