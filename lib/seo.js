import {
  ADDRESS_LINE,
  ADDRESS_SEO,
  BRAND_NAME,
  EMAIL,
  PHONE_DISPLAY,
  SITE_URL,
} from "./constants";

/** Mots-clés SEO prioritaires (français, local El Biar) */
export const SEO_KEYWORDS = [
  "Dentiste Bounab",
  "Dentiste Dr Bounab H24 7/7",
  "Cabinet dentaire Dr Bounab",
  "Dentiste de garde à El Biar",
  "Cabinet dentaire ouvert H24 7j/7",
  "Urgence dentaire El Biar",
  "Dentiste à El Biar",
  "Soins dentaires à El Biar",
];

const titleDefault =
  "Dentiste Bounab | Dentiste Dr Bounab H24 7/7 | Cabinet dentaire Dr Bounab – El Biar";

const descriptionDefault =
  "Dentiste Bounab - Dentiste Dr Bounab H24 7/7 à El Biar, Alger. Cabinet dentaire Dr Bounab ouvert H24 7j/7 : " +
  "dentiste de garde à El Biar, urgence dentaire El Biar, soins dentaires à El Biar. " +
  `Adresse : ${ADDRESS_SEO}. Rendez-vous au ${PHONE_DISPLAY} ou WhatsApp.`;

export const siteMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titleDefault,
    template: `%s | Cabinet dentaire Dr Bounab – El Biar`,
  },
  description: descriptionDefault,
  keywords: [
    ...SEO_KEYWORDS,
    "Dentiste Bounab",
    "dentiste bounab",
    "bounab",
    "cabinet dentaire El Biar",
    "dentiste Alger",
    "Dr Bounab",
    "rendez-vous dentiste El Biar",
    "urgence dentaire Alger",
    "dentiste H24 El Biar",
  ],
  authors: [{ name: "Dr Bounab" }],
  creator: "Cabinet dentaire Dr Bounab",
  publisher: "Cabinet dentaire Dr Bounab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: SITE_URL,
    siteName: "Cabinet dentaire Dr Bounab – El Biar",
    title: titleDefault,
    description: descriptionDefault,
    images: [
      {
        url: "/img/dentist-giving-mirror-patient-office.jpg",
        width: 1200,
        height: 800,
        alt: "Cabinet dentaire Dr Bounab – Dentiste H24 7/7 à El Biar, urgence dentaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: descriptionDefault,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "health",
  other: {
    "geo.region": "DZ-16",
    "geo.placename": "El Biar",
    "geo.position": "36.7684005;3.0315389",
    ICBM: "36.7684005, 3.0315389",
  },
};

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Cabinet dentaire Dr Bounab",
    alternateName: [
      "Dentiste Dr Bounab H24 7/7",
      "Dr Bounab",
      "Dentiste de garde à El Biar",
    ],
    description: descriptionDefault,
    url: SITE_URL,
    telephone: "+213555917061",
    email: EMAIL,
    image: `${SITE_URL}/img/dentist-holding-dental-tools.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Boulevard Colonel Bougara",
      addressLocality: "El Biar",
      addressRegion: "Alger",
      postalCode: "16000",
      addressCountry: "DZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.7684005,
      longitude: 3.0315389,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "City",
      name: "El Biar",
    },
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Urgence dentaire El Biar",
      },
      {
        "@type": "MedicalProcedure",
        name: "Soins dentaires à El Biar",
      },
    ],
    sameAs: [
      SITE_URL,
      "https://www.google.com/maps/place/Dentiste+dr+bounab+H24+7%2F7",
    ],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`,
  };
}
