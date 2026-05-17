import Link from "next/link";
import SiteImage from "./SiteImage";

export default function Team() {
  return (
    <>
      
          <div id="team" className="container-fluid py-5 site-section">
          <div className="container">
              <div className="row g-5 align-items-center">
      
                  <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                      <div className="team-item single-dentist">
                          <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                              <SiteImage
                    src="/img/dentist-holding-dental-tools.jpg"
                    width={1200}
                    height={800}
                    alt={"Dr Bounab — Dentiste Bounab, El Biar"}
                    className="img-fluid rounded-top w-100"
                    loading="lazy"
                  />
                          </div>
      
                          <div className="team-text position-relative bg-light text-center rounded-bottom p-4">
                              <h4 className="mb-2">Dr. BOUNAB</h4>
                              <p className="text-primary mb-0">Chirurgien-Dentiste</p>
                          </div>
                      </div>
                  </div>
      
                  <div className="col-lg-8 wow slideInUp" data-wow-delay="0.3s">
                      <div className="dentist-description bg-light rounded p-5">
      
                          <div className="section-title mb-4">
                              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                                  Notre Dentiste
                              </h5>
      
                              <h1 className="display-6 mb-0">
                                  Une prise en charge attentive, transparente et personnalisée
                              </h1>
                          </div>
      
                          <p className="mb-4">
                              Le Dr Bounab accompagne chaque patient avec une approche fondée sur l’écoute,
                              la précision du diagnostic et la clarté des explications. Chaque consultation
                              permet d’évaluer les besoins du patient afin de proposer des soins adaptés,
                              réalisés dans les meilleures conditions de confort et de sécurité.
                          </p>
      
                          <div className="row g-3 mb-4">
      
                              <div className="col-md-6">
                                  <div className="dentist-point wow fadeInUp" data-wow-delay="0.1s">
                                      <i className="fa fa-check-circle text-primary me-3"></i>
                                      <span>Diagnostic précis et explications claires avant tout traitement</span>
                                  </div>
                              </div>
      
                              <div className="col-md-6">
                                  <div className="dentist-point wow fadeInUp" data-wow-delay="0.2s">
                                      <i className="fa fa-check-circle text-primary me-3"></i>
                                      <span>Plans de soins adaptés aux besoins de chaque patient</span>
                                  </div>
                              </div>
      
                              <div className="col-md-6">
                                  <div className="dentist-point wow fadeInUp" data-wow-delay="0.3s">
                                      <i className="fa fa-check-circle text-primary me-3"></i>
                                      <span>Prise en charge des urgences et douleurs dentaires</span>
                                  </div>
                              </div>
      
                              <div className="col-md-6">
                                  <div className="dentist-point wow fadeInUp" data-wow-delay="0.4s">
                                      <i className="fa fa-check-circle text-primary me-3"></i>
                                      <span>Suivi rigoureux pour assurer la continuité des soins</span>
                                  </div>
                              </div>
      
                          </div>
      
                          <p className="mb-4">
                              L’objectif du cabinet est d’offrir une prise en charge professionnelle,
                              pédagogique et rassurante, afin de permettre à chaque patient de comprendre
                              son traitement et d’aborder ses soins dentaires en toute confiance.
                          </p>
      
                          <Link href="#reservation" className="btn btn-primary py-3 px-5">
                              Prendre Rendez-vous
                          </Link>
      
                      </div>
                  </div>
      
              </div>
          </div>
      </div>
          
    </>
  );
}
