import fs from "fs";
import path from "path";

const D = "components";

function write(name, content) {
  fs.writeFileSync(path.join(D, name), content.trimStart() + "\n");
}

write(
  "HeroCarousel.jsx",
  `import Link from "next/link";
import SiteImage from "./SiteImage";

export default function HeroCarousel() {
  return (
    <div id="home" className="container-fluid p-0 mb-5 site-section">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <SiteImage
              className="w-100"
              src="/img/dentist-giving-mirror-patient-office.jpg"
              width={1200}
              height={800}
              alt="Cabinet dentaire Dr Bounab – dentiste H24 7/7 à El Biar"
              priority
              fetchPriority="high"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="hero-content p-3">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Votre sourire, notre priorité.
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Dr Bounab vous accompagne pour vos soins et Urgences dentaires 24/7
                </h1>
                <div className="hero-actions">
                  <Link
                    href="#reservation"
                    className="btn btn-primary py-md-3 px-md-5 animated slideInLeft"
                  >
                    Prendre Rendez-vous
                  </Link>
                  <Link
                    href="#contact"
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Nous Contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <motionless>
            <motionless />
          </motionless>
        </motionless>
        <motionless />
        <motionless />
      </motionless>
    </motionless>
  );
}
`
);

console.log("Generated HeroCarousel (partial - run fix)");
