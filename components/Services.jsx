import SiteImage from "./SiteImage";

export default function Services() {
  return (
    <>
      
          <div id="services" className="container-fluid py-5 site-section">
              <div className="container">
                  <div className="row g-5 align-items-end mb-5">
                      <div className="col-lg-8">
                          <div className="section-title">
                              <h5 className="position-relative d-inline-block text-primary text-uppercase">Nos Services</h5>
                              <h2 className="display-5 mb-0">Les Services dentaires disponibles ! </h2>
                          </div>
                      </div>
                      
                  </div>
                  <div className="row g-4">
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/dentist-examining-female-patient.jpg"
                    width={1200}
                    height={800}
                    alt={"Contrôle dentaire"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Contrôle dentaire</h5>
                              <p>Vérification des dents, des gencives et conseils de prévention.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/dentist-assistant-with-tool-makes-some-manipulations-patient-s-mouth.jpg"
                    width={867}
                    height={1300}
                    alt={"Douleur dentaire ou urgence"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Douleur dentaire ou urgence</h5>
                              <p>Douleur, abcès, dent cassée, gonflement ou saignement.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/equipment-dental-instruments-dentist-s-office-tools-close-up.jpg"
                    width={1200}
                    height={800}
                    alt={"Carie ou plombage"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Carie ou plombage</h5>
                              <p>Traitement des caries et réparation des dents abîmées.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/high-angle-dentist-holding-equipment.jpg"
                    width={1200}
                    height={800}
                    alt={"Extraction dentaire"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Extraction dentaire</h5>
                              <p>Retrait d’une dent très abîmée, infectée ou douloureuse.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/dentist-examining-female-patient-with-teeth-shades.jpg"
                    width={1200}
                    height={800}
                    alt={"Blanchiment des dents"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Blanchiment des dents</h5>
                              <p>Pour les dents jaunies ou tachées, avec contrôle préalable.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/digital-smile-design.jpg"
                    width={780}
                    height={488}
                    alt={"Esthétique du sourire"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Esthétique du sourire</h5>
                              <p>Amélioration de la forme, de la couleur et de l’aspect des dents.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/dental-procedure-installing-braces-close-up-dentistry-braces-teeth1.jpg"
                    width={1200}
                    height={558}
                    alt={"Appareil dentaire et ODF"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Appareil dentaire / ODF</h5>
                              <p>Dents mal alignées, décalage des mâchoires et suivi ODF.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                          <div className="service-card bg-light">
                              <div className="service-card-media">
                                  <SiteImage
                    src="/img/close-up-pacient-talking-doctor-about-vaccine.jpg"
                    width={1200}
                    height={569}
                    alt={"Suivi après soin"}
                    className=""
                    loading="lazy"
                  />
                              </div>
                              <h5>Suivi après soin</h5>
                              <p>Contrôle de la cicatrisation, de la douleur et de l’évolution.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
    </>
  );
}
