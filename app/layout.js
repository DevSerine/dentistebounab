import { siteMetadata, getLocalBusinessJsonLd } from "@/lib/seo";
import "@/styles/globals.css";
import ClientProviders from "@/components/ClientProviders";

const GOOGLE_SITE_VERIFICATION = "kM4HEis6XbqY__gcJi-jiHTUETd--zw7rMsv_IFDJaQ";
const FAVICON_PATH = "/img/ChatGPT%20Image%20May%2015%2C%202026%2C%2006_04_26%20PM.svg";

export const metadata = {
  ...siteMetadata,
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [{ url: FAVICON_PATH, type: "image/svg+xml", sizes: "any" }],
    shortcut: [{ url: FAVICON_PATH, type: "image/svg+xml" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06A3DA",
};

/** Polices chargées dans le navigateur uniquement — évite les erreurs serveur si next/font ne peut joindre Google. */
export default function RootLayout({ children }) {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"
        />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
        />
        <link rel="stylesheet" href="/lib/animate/animate.min.css" />
        <link rel="icon" href={FAVICON_PATH} type="image/svg+xml" sizes="any" />
        <link rel="shortcut icon" href={FAVICON_PATH} type="image/svg+xml" />
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
