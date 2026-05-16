import Link from "next/link";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dentiste Bounab | Dentiste El Biar, Alger | Cabinet dentaire à El Biar",
  description:
    "Dentiste Bounab à El Biar, Alger. Cabinet dentaire au Boulevard Colonel Bougara pour consultation, soins dentaires et urgence dentaire H24.",
  path: "/dentiste-el-biar",
  keywords: ["Dentiste El Biar", "Cabinet dentaire El Biar", "Dentiste Bounab El Biar"],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd("/dentiste-el-biar", "Dentiste El Biar");

export default function DentisteElBiarPage() {
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
              Dentiste Bounab – Cabinet dentaire à El Biar, Alger | H24 7j/7
            </h1>
            <p className="lead text-body mt-3">
              Cabinet dentaire Dentiste Bounab situé au Boulevard Colonel Bougara, El Biar. Consultation, soins dentaires, urgence dentaire et prise en charge 24h/24.
            </p>
          </div>

          <section className="mb-5">
            <h2>Cabinet dentaire à El Biar</h2>
            <p>
              Dentiste Bounab est le cabinet dentaire de référence à El Biar, Alger, pour les patients cherchant un service local, rapide et professionnel.
            </p>
          </section>

          <section className="mb-5">
            <h2>Urgence dentaire H24</h2>
            <p>
              En cas d’urgence dentaire El Biar, le cabinet assure une prise en charge 24h/24 et 7j/7 pour les douleurs, infections, accidents ou fractures dentaires.
            </p>
          </section>

          <section className="mb-5">
            <h2>Soins dentaires</h2>
            <p>
              Soins dentaires complets : soins conservateurs, prothèses, extraction, implantologie, esthétique et traitements des caries avec suivi personnalisé.
            </p>
          </section>

          <section className="mb-5">
            <h2>Consultation dentaire</h2>
            <p>
              La consultation dentaire à Dentiste Bounab inclut un examen complet, un diagnostic précis et un plan de traitement adapté à votre bouche et à votre confort.
            </p>
          </section>

          <section className="mb-5">
            <h2>Chirurgien dentiste El Biar</h2>
            <p>
              Dentiste Bounab est un chirurgien dentiste expérimenté à El Biar, offrant un accompagnement professionnel pour les interventions chirurgicales et les urgences.
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
