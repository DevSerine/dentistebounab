import { siteMetadata, getStructuredDataJsonLd } from "@/lib/seo";
import "@/styles/globals.css";
import ClientProviders from "@/components/ClientProviders";

const GOOGLE_SITE_VERIFICATION = "kM4HEis6XbqY__gcJi-jiHTUETd--zw7rMsv_IFDJaQ";
const FAVICON_PATH = "/favicon.svg";

export const metadata = {
  ...siteMetadata,
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: FAVICON_PATH, type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06A3DA",
};

/** Polices chargées dans le navigateur uniquement — évite les erreurs serveur si next/font ne peut joindre Google. */
export default function RootLayout({ children }) {
  const jsonLd = getStructuredDataJsonLd();

  return (
    <html lang="fr-DZ">
      <head>
        <title>Dentiste Bounab — Dentiste El Biar 24h/24, Alger</title>
        <meta
          name="description"
          content="Dentiste Bounab à El Biar (Alger) — Dr Bounab, urgences dentaires 24/7, soins, esthétique et blanchiment. Tel/WhatsApp 0555 91 70 61."
        />
        <link rel="canonical" href="https://dentistebounab.netlify.app/" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preload" href="/img/dentist-giving-mirror-patient-office.jpg" as="image" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#06A3DA" />
        <meta name="theme-color" content="#06A3DA" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
