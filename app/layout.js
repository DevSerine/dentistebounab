import { siteMetadata, getLocalBusinessJsonLd } from "@/lib/seo";
import "@/styles/globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata = {
  ...siteMetadata,
  icons: {
    icon: "/img/logo.svg",
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
