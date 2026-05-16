import Link from "next/link";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dentiste Bounab | Cabinet dentaire El Biar | Boulevard Colonel Bougara",
  description:
    "Cabinet dentaire El Bounab au Boulevard Colonel Bougara, El Biar. Soins dentaires, consultations et urgences dentaire H24 pour toute la famille.",
  path: "/cabinet-dentaire-el-biar",
  keywords: ["Cabinet dentaire El Biar", "Boulevard Colonel Bougara", "Dentiste El Biar Alger"],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd("/cabinet-dentaire-el-biar", "Cabinet dentaire El Biar");

export default function CabinetDentaireElBiarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="container-fluid py-5 site-section">
        <div className="container">
          <div className="section-title mb-4">
            <h1 className="display-5 mb-0">
              Cabinet dentaire El Biar – Dentiste Bounab sur Boulevard Colonel Bougara
            </h1>
            <p className="lead text-body mt-3">
              Cabinet dentaire à El Biar, Alger, avec un service de consultation, soins et prise en charge des urgences dentaires 24h/24.
            </p>
          </div>

          <section className="mb-5">
            <h2>Cabinet dentaire à El Biar</h2>
            <p>
              Dentiste Bounab propose un cabinet dentaire moderne et sécurisé au Boulevard Colonel Bougara, dans le quartier d’El Biar à Alger.
            </p>
          </section>

          <section className="mb-5">
            <h2>Urgence dentaire H24</h2>
            <p>
              En urgence dentaire, votre cabinet de garde reste joignable pour limiter la douleur et démarrer le traitement le plus vite possible.
            </p>
          </section>

          <section className="mb-5">
            <h2>Soins dentaires</h2>
            <p>
              Nous offrons des soins dentaires complets, de la prévention au traitement, avec un suivi attentif des résultats à long terme.
            </p>
          </section>

          <section className="mb-5">
            <h2>Consultation dentaire</h2>
            <p>
              La consultation dentaire inclut une analyse détaillée de votre sourire, des conseils personnalisés et une proposition de soins adaptés.
            </p>
          </section>

          <section className="mb-5">
            <h2>Chirurgien dentiste El Biar</h2>
            <p>
              Dentiste Bounab est le chirurgien dentiste local qui assure des interventions précises et un accompagnement continu.
            </p>
          </section>

          <div className="mt-4">
            <Link href="/#reservation" className="btn btn-primary py-3 px-5">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
