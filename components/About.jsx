import Link from "next/link";
import SiteImage from "./SiteImage";

export default function About() {
  return (
    <>
      
          <div id="about" className="container-fluid py-5 wow fadeInUp site-section" data-wow-delay="0.1s">
              <div className="container">
                  <div className="row g-5">
                      <div className="col-lg-7">
                          <div className="section-title mb-4">
                              <h5 className="position-relative d-inline-block text-primary text-uppercase">À propos du cabinet</h5>
                              <h1 className="display-5 mb-0">Cabinet dentaire du Dr Bounab — El Biar</h1>
                          </div>
                          <p className="lead text-body mb-4">
                              Au boulevard Colonel Bougara pour vos soins courants, urgences dentaires et esthétique. Ouvert 24h/24, 7j/7 (samedi au jeudi). Rendez-vous par téléphone ou WhatsApp.
                          </p>
                          <div className="row g-3">
                              <div className="col-sm-6">
                                  <h5 className="mb-3 wow fadeInUp" data-wow-delay="0.1s"><i className="fa fa-check-circle text-primary me-3"></i>Consultation et suivi tout au long de la prise en charge </h5>
                                  <h5 className="mb-3 wow fadeInUp" data-wow-delay="0.2s"><i className="fa fa-check-circle text-primary me-3"></i>Traitements adaptés </h5>
                              </div>
                              <div className="col-sm-6">
                                  <h5 className="mb-3 wow fadeInUp" data-wow-delay="0.3s"><i className="fa fa-check-circle text-primary me-3"></i>Gestion rapide des urgences </h5>
                                  <h5 className="mb-3 wow fadeInUp" data-wow-delay="0.4s"><i className="fa fa-check-circle text-primary me-3"></i>Rendez-vous au cabinet par téléphone ou WhatsApp </h5>
                              </div>
                          </div>
                          <Link href="#reservation" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Prendre Rendez-vous</Link>
                      </div>
                      <div className="col-lg-5" style={{ minHeight: "500px" }}>
                          <div className="position-relative h-100">
                              <SiteImage
                    src="/img/young-girl-dentist-choosing-tools-dentistry-concept-preparation-tooth-filling.jpg"
                    width={867}
                    height={1300}
                    alt="Cabinet dentaire du Dr Bounab à El Biar — consultation et soins dentaires"
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    loading="lazy"
                  />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
    </>
  );
}
