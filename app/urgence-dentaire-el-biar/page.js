import Link from "next/link";
import { createPageMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Dentiste Bounab | Urgence dentaire El Biar | Dentiste H24 7j/7",
  description:
    "Urgence dentaire El Biar avec Dentiste Bounab. Service H24, prise en charge rapide et soins dentaires immédiats pour tous types d’urgence.",
  path: "/urgence-dentaire-el-biar",
  keywords: ["Urgence dentaire El Biar", "Dentiste H24 El Biar", "Dentiste 24/7 El Biar"],
});

const breadcrumbJsonLd = getBreadcrumbJsonLd("/urgence-dentaire-el-biar", "Urgence dentaire El Biar");

export default function UrgenceDentaireElBiarPage() {
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
              Urgence dentaire El Biar – Dentiste Bounab H24 7j/7
            </h1>
            <p className="lead text-body mt-3">
              En urgence dentaire à El Biar, Dentiste Bounab reçoit rapidement les patients pour des soins immédiats et une gestion des douleurs 24h/24.
            </p>
          </div>

          <section className="mb-5">
            <h2>Cabinet dentaire El Biar</h2>
            <p>
              Situé au Boulevard Colonel Bougara, le cabinet dentaire est facilement accessible depuis El Biar, Hydra, Kouba et le centre d’Alger.
            </p>
          </section>

          <section className="mb-5">
            <h2>Urgence dentaire H24</h2>
            <p>
              Notre accueil H24 permet d’intervenir sur les douleurs, les abcès, les dents cassées, les saignements et les traumatismes dentaires en urgence.
            </p>
          </section>

          <section className="mb-5">
            <h2>Soins dentaires</h2>
            <p>
              Le cabinet combine une prise en charge d’urgence avec des soins dentaires complets : obturations, désinfections, prothèses et suivi post-soin.
            </p>
          </section>

          <section className="mb-5">
            <h2>Consultation dentaire</h2>
            <p>
              Chaque urgence est suivie d’une consultation dentaire détaillée pour définir le traitement le plus sûr et le plus rapide.
            </p>
          </section>

          <section className="mb-5">
            <h2>Chirurgien dentiste El Biar</h2>
            <p>
              Dentiste Bounab est votre chirurgien dentiste de garde à El Biar avec une approche professionnelle, rassurante et orientée vers la guérison.
            </p>
          </section>

          <div className="mt-4">
            <Link href="/#contact" className="btn btn-primary py-3 px-5">
              Contactez-nous maintenant
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
