"use client";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "EquilibrioLine",
    "description": "Clínica estética especializada en tratamientos corporales y faciales avanzados con tecnología de vanguardia",
    "url": "https://equilibrioline.com",
    "logo": "https://equilibrioline.com/Equilibrio-line-logo.svg",
    "image": "https://equilibrioline.com/assets/hero/Hero_EquilibrioLine.png",
    "telephone": "+34-621-665-635",
    "email": "info@equilibrioline.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Estación, 27",
      "addressLocality": "Molina de Segura",
      "addressRegion": "Murcia",
      "postalCode": "30500",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.0531",
      "longitude": "-1.2136"
    },
    "openingHours": [
      "Mo-Fr 08:00-21:30",
      "Sa 08:00-21:30"
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "EUR",
    "medicalSpecialty": [
      "Aesthetic Medicine",
      "Dermatology",
      "Cosmetic Surgery"
    ],
    "serviceType": [
      "Tratamientos Faciales",
      "Tratamientos Corporales",
      "Adelgazamiento",
      "Rejuvenecimiento",
      "Reducción de Celulitis",
      "Reafirmación",
      "Antiarrugas"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "38.0531",
        "longitude": "-1.2136"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tratamientos Estéticos",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Adelgazamiento Localizado",
            "description": "Reducción efectiva de grasa localizada mediante tecnología avanzada"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rejuvenecimiento Facial",
            "description": "Restauración de la juventud y luminosidad natural del rostro"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reducción de Celulitis",
            "description": "Tratamiento integral para mejorar la textura y apariencia de la piel"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tonificación Muscular",
            "description": "Fortalecimiento y definición muscular sin cirugía"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "María González"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excelente atención y resultados increíbles. El equipo es muy profesional y las instalaciones son de primera calidad."
      }
    ],
    "sameAs": [
      "https://www.instagram.com/equilibrio.line.molina/",
      "https://equilibrioline.es/",
      "https://maps.app.goo.gl/4Kb7ur3rEwKkWRXUA"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}