import Link from "next/link";
import SiteImage from "./SiteImage";

export default function HeroCarousel() {
  return (
    <div id="home" className="container-fluid p-0 mb-5 site-section">
      <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-media">
              <SiteImage
                fill
                src="/img/dentist-giving-mirror-patient-office.jpg"
                alt="Cabinet dentaire Dr Bounab"
                className="carousel-slide-img"
                priority
                fetchPriority="high"
                sizes="100vw"
              />
            </div>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="hero-content p-3">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Votre sourire, notre priorité.
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Dr Bounab vous accompagne pour vos soins et Urgences dentaires 24/7
                </h1>
                <div className="hero-actions">
                  <Link href="#reservation" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft">
                    Prendre Rendez-vous
                  </Link>
                  <Link href="#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                    Nous Contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-media">
              <SiteImage
                fill
                src="/img/equipment-dental-instruments-dentist-s-office-tools-close-up.jpg"
                alt="Consultation dentaire"
                className="carousel-slide-img"
                loading="lazy"
                sizes="100vw"
              />
            </div>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="hero-content p-3">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Urgence, prévention et esthétique
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Une prise en charge claire et professionnelle
                </h1>
                <div className="hero-actions">
                  <Link href="#reservation" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft">
                    Prendre Rendez-vous
                  </Link>
                  <Link href="#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">
                    Nous Contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
}
