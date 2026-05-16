import Link from "next/link";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dentiste Bounab | Consultation dentaire El Biar | Cabinet dentaire Alger",
  description:
    "Consultation dentaire à El Biar avec Dentiste Bounab. Rendez-vous au Boulevard Colonel Bougara pour un diagnostic rapide et des soins dentaires personnalisés.",
  path: "/consultation-dentaire-el-biar",
  keywords: ["Consultation dentaire El Biar", "Dentiste Alger urgence", "Dentiste Bounab consultation"],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd("/consultation-dentaire-el-biar", "Consultation dentaire El Biar");

export default function ConsultationDentaireElBiarPage() {
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
              Consultation dentaire El Biar – Dentiste Bounab à Alger
            </h1>
            <p className="lead text-body mt-3">
              Consultation dentaire au cabinet Dentiste Bounab sur Boulevard Colonel Bougara. Diagnostic précis, prise en charge rapide et suivi professionnel.
            </p>
          </div>

          <section className="mb-5">
            <h2>Cabinet dentaire à El Biar</h2>
            <p>
              Dentiste Bounab est le cabinet dentaire local de confiance pour une consultation détaillée et un plan de soins sur mesure.
            </p>
          </section>

          <section className="mb-5">
            <h2>Urgence dentaire H24</h2>
            <p>
              Même en situation d’urgence, votre consultation est organisée rapidement pour limiter la douleur et prévoir le traitement adapté.
            </p>
          </section>

          <section className="mb-5">
            <h2>Soins dentaires</h2>
            <p>
              La consultation dentaire s’appuie sur un examen complet et permet de proposer les meilleurs soins dentaires à El Biar.
            </p>
          </section>

          <section className="mb-5">
            <h2>Consultation dentaire</h2>
            <p>
              Bénéficiez d’une première consultation très détaillée, d’un bilan global et d’une explication claire de chaque option de traitement.
            </p>
          </section>

          <section className="mb-5">
            <h2>Chirurgien dentiste El Biar</h2>
            <p>
              Le Dr Bounab, chirurgien dentiste à El Biar, vous accompagne avec un savoir-faire local et une écoute attentive.
            </p>
          </section>

          <div className="mt-4">
            <Link href="/#reservation" className="btn btn-primary py-3 px-5">
              Réserver une consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
