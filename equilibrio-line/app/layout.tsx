import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Header, Footer } from "./components/";
import StructuredData from "./components/StructuredData";
import "./globals.css";
import Script from "next/script";

const adelia = localFont({
  src: [
    {
      path: './fonts/adelia.woff',
    }
  ],
  variable: '--font-adelia'
});

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
    other: {
      'facebook-domain-verification': 'wdcqqjuvdqmmpsivli044li7c540i8',
    }
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
        <meta name="facebook-domain-verification" content="wdcqqjuvdqmmpsivli044li7c540i8" />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1477042056937834');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1477042056937834&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className={`${adelia.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
