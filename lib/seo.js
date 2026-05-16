import {
  ADDRESS_LINE,
  ADDRESS_SEO,
  EMAIL,
  PHONE_DISPLAY,
  SITE_URL,
  GOOGLE_MAPS_PLACE,
} from "./constants";

/** Mots-clés SEO prioritaires (français, local El Biar) */
export const SEO_KEYWORDS = [
  "Dentiste Bounab",
  "Dentiste El Biar",
  "Cabinet dentaire El Biar",
  "Urgence dentaire El Biar",
  "Dentiste H24 El Biar",
  "Dentiste 24/7 El Biar",
  "Boulevard Colonel Bougara",
  "Chirurgien dentiste El Biar",
];

const titleDefault =
  "Dentiste Bounab | Dentiste El Biar, Alger | Urgence Dentaire H24 7j/7";

const descriptionDefault =
  "Cabinet dentaire Dentiste Bounab à El Biar, Alger – Boulevard Colonel Bougara. " +
  "Consultations, soins dentaires et urgences dentaires H24 avec prise en charge 7j/7.";

export const siteMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: titleDefault,
    template: "%s | Dentiste Bounab",
  },
  description: descriptionDefault,
  keywords: [
    ...SEO_KEYWORDS,
    "Dentiste Bounab",
    "El Biar Alger",
    "urgence dentaire H24",
    "Cabinet dentaire Boulevard Colonel Bougara",
    "consultation dentaire El Biar",
    "soins dentaires El Biar",
  ],
  authors: [{ name: "Dentiste Bounab" }],
  creator: "Dentiste Bounab",
  publisher: "Dentiste Bounab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_DZ",
    url: SITE_URL,
    siteName: "Dentiste Bounab",
    title: titleDefault,
    description: descriptionDefault,
    images: [
      {
        url: "/img/dentist-giving-mirror-patient-office.jpg",
        width: 1200,
        height: 800,
        alt: "Dentiste Bounab – Urgence dentaire H24 à El Biar, Alger",
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
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "fr-DZ": SITE_URL,
    },
  },
  category: "health",
  other: {
    "geo.region": "DZ-16",
    "geo.placename": "El Biar",
    "geo.position": "36.7684005;3.0315389",
    ICBM: "36.7684005, 3.0315389",
  },
};

export function createPageMetadata({ title, description, path, keywords = [] }) {
  const pageUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [...SEO_KEYWORDS, ...keywords],
    openGraph: {
      ...siteMetadata.openGraph,
      title,
      description,
      url: pageUrl,
    },
    twitter: {
      ...siteMetadata.twitter,
      title,
      description,
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        "fr-DZ": pageUrl,
      },
    },
    robots: siteMetadata.robots,
  };
}

export function getStructuredDataJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
        name: "Dentiste Bounab",
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
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "El Biar",
        },
        priceRange: "$$",
        medicalSpecialty: "Dentistry",
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Urgence dentaire",
          },
          {
            "@type": "MedicalProcedure",
            name: "Consultation dentaire",
          },
          {
            "@type": "MedicalProcedure",
            name: "Soins dentaires",
          },
          {
            "@type": "MedicalProcedure",
            name: "Esthétique dentaire",
          },
        ],
        sameAs: [SITE_URL, GOOGLE_MAPS_PLACE],
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          ADDRESS_LINE
        )}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dentiste Bounab",
            item: SITE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Où se trouve le cabinet Dentiste Bounab à El Biar ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le cabinet Dentiste Bounab est situé sur Boulevard Colonel Bougara à El Biar, Alger, avec accès facile depuis le centre d'Alger.",
            },
          },
          {
            "@type": "Question",
            name: "Le cabinet dentaire est-il ouvert en urgence H24 ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, Dentiste Bounab propose une prise en charge des urgences dentaires H24 et un service disponible 7 jours sur 7.",
            },
          },
          {
            "@type": "Question",
            name: "Quelles spécialités dentaires sont proposées à El Biar ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le cabinet offre consultation dentaire, soins dentaires, chirurgie dentaire, esthétique dentaire et prise en charge des urgences à El Biar.",
            },
          },
        ],
      },
    ],
  };
}

export function getBreadcrumbJsonLd(path, pageName) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}
