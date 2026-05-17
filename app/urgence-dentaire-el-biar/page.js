import Link from "next/link";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { PHONE_DISPLAY, WHATSAPP_NUMBER, whatsAppUrl, ADDRESS_SEO } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Urgence dentaire El Biar — Dentiste Bounab 24/7",
  description:
    "Urgence dentaire El Biar avec Dentiste Bounab — service 24/7, prise en charge immédiate et soins urgents au Boulevard Colonel Bougara.",
  path: "/urgence-dentaire-el-biar",
  keywords: ["Urgence dentaire El Biar", "Dentiste H24 El Biar", "Dentiste 24/7 El Biar"],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd("/urgence-dentaire-el-biar", "Urgence dentaire El Biar");

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que faire en cas de douleur dentaire sévère ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Appelez immédiatement Dentiste Bounab au ${PHONE_DISPLAY} ou envoyez un message WhatsApp au ${WHATSAPP_NUMBER}. En attendant, appliquez une compresse froide et évitez les analgésiques contre‑indiqués.`
      }
    },
    {
      "@type": "Question",
      "name": "Le cabinet est‑il ouvert la nuit ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui — Dentiste Bounab assure une permanence 24h/24 et 7j/7 pour les urgences dentaires à El Biar."
      }
    },
    {
      "@type": "Question",
      "name": "Où se situe le cabinet ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `${ADDRESS_SEO} — Boulevard Colonel Bougara, El Biar, Alger.`
      }
    },
    {
      "@type": "Question",
      "name": "Proposez‑vous un suivi après intervention ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui — chaque urgence est suivie d’un protocole de suivi et d’un contrôle post‑opératoire pour assurer la guérison et le confort du patient."
      }
    }
  ]
};

export default function UrgenceDentaireElBiarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container-fluid py-5 site-section">
        <div className="container">
          <div className="section-title mb-4">
            <h1 className="display-5 mb-0">Urgence dentaire El Biar — Dentiste Bounab</h1>
            <p className="lead text-body mt-3">
              Pour toute urgence dentaire à El Biar (Alger), appelez ou envoyez un message WhatsApp : <a href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}>{PHONE_DISPLAY}</a> — WhatsApp : <a href={whatsAppUrl("Bonjour Dentiste Bounab")}>Envoyer un message</a>.
            </p>
          </div>

          <section className="mb-5">
            <h2>Prise en charge immédiate des urgences</h2>
            <p>
              Dentiste Bounab assure une prise en charge rapide des situations critiques : douleurs intenses, abcès, traumatismes, dents cassées, saignements importants. Notre objectif est d’apaiser la douleur et d’éviter les complications infectieuses avant de proposer un traitement définitif.
            </p>
            <h3>Que faire en attendant ?</h3>
            <ul>
              <li>Contactez le cabinet via téléphone ou WhatsApp.</li>
              <li>Rincez doucement à l’eau tiède si nécessaire.</li>
              <li>Appliquez une compresse froide pour réduire le gonflement.</li>
              <li>Évitez les aspirines si vous craignez un saignement important.</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2>Soins d’urgence proposés</h2>
            <p>
              Nos interventions rapides comprennent : drainage d’abcès, dévitalisation d’urgence, obturations temporaires, sutures en cas de plaie, extractions en cas d’indication, et prescriptions adaptées (antibiotiques, antalgiques).
            </p>
          </section>

          <section className="mb-5">
            <h2>Suivi et prévention</h2>
            <p>
              Après la phase d’urgence, nous programmons un suivi pour finaliser le traitement (prothèse, couronne, traitement endodontique complet) et prévenir les récidives. Le cabinet propose des conseils personnalisés pour l’hygiène et la prévention.
            </p>
          </section>

          <section className="mb-5">
            <h2>Informations pratiques</h2>
            <p>
              Adresse : <strong>{ADDRESS_SEO}</strong> — Boulevard Colonel Bougara, El Biar, Alger. Téléphone : <a href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`}>{PHONE_DISPLAY}</a>. WhatsApp : <a href={whatsAppUrl("Bonjour Dentiste Bounab")}>Envoyer un message</a>.
            </p>
          </section>

          <div className="mt-4">
            <Link href={`tel:${PHONE_DISPLAY.replace(/\s+/g, "")}`} className="btn btn-primary py-3 px-5 me-3">
              Appeler {PHONE_DISPLAY}
            </Link>
            <Link href={whatsAppUrl("Bonjour Dentiste Bounab")} className="btn btn-success py-3 px-5">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
