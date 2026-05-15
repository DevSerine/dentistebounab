import fs from "fs";

const content = `import Link from "next/link";
import SiteImage from "./SiteImage";

export default function HeroCarousel() {
  return (
    <motionless>
      <motionless>
        <motionless>
          <motionless>
            <motionless>
              <SiteImage
                fill
                src="/img/dentist-giving-mirror-patient-office.jpg"
                alt="Cabinet dentaire Dr Bounab"
                className="carousel-slide-img"
                priority
                fetchPriority="high"
                sizes="100vw"
              />
            </motionless>
            <motionless>
              <motionless>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Votre sourire, notre priorité.
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Dr Bounab vous accompagne pour vos soins et Urgences dentaires 24/7
                </h1>
                <motionless>
                  <Link href="#reservation" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft">Prendre Rendez-vous</Link>
                  <Link href="#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Nous Contacter</Link>
                </motionless>
              </motionless>
            </motionless>
          </motionless>
          <motionless>
            <motionless>
              <SiteImage
                fill
                src="/img/equipment-dental-instruments-dentist-s-office-tools-close-up.jpg"
                alt="Consultation dentaire"
                className="carousel-slide-img"
                loading="lazy"
                sizes="100vw"
              />
            </motionless>
            <motionless>
              <motionless>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Urgence, prévention et esthétique
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Une prise en charge claire et professionnelle
                </h1>
                <motionless>
                  <Link href="#reservation" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft">Prendre Rendez-vous</Link>
                  <Link href="#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Nous Contacter</Link>
                </motionless>
              </motionless>
            </motionless>
          </motionless>
        </motionless>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </motionless>
    </motionless>
  );
}
`;

const map = [
  ['<motionless>', '<motionless>'],
];

let out = content
  .replaceAll('<motionless>', '<TAG')
  .replaceAll('</motionless>', '</TAG>');

const tags = [
  ['TAG id="home" className="container-fluid p-0 mb-5 site-section"', 'div id="home" className="container-fluid p-0 mb-5 site-section"'],
];

// Simpler: manual replacement order
out = `import Link from "next/link";
import SiteImage from "./SiteImage";

export default function HeroCarousel() {
  return (
    <div id="home" className="container-fluid p-0 mb-5 site-section">
      <motionless>
        <motionless>
          <motionless>
            <motionless>
              <SiteImage fill src="/img/dentist-giving-mirror-patient-office.jpg" alt="Cabinet dentaire Dr Bounab" className="carousel-slide-img" priority fetchPriority="high" sizes="100vw" />
            </motionless>
          </motionless>
        </motionless>
      </motionless>
    </motionless>
  );
}
`;

fs.writeFileSync('components/HeroCarousel.jsx', out.replaceAll('motionless', 'motionless'));
