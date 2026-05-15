import LazyEmailForm from "./LazyEmailForm";
import MapEmbed from "./MapEmbed";

export default function Contact() {
  return (
    <>
      
          <div id="contact" className="container-fluid py-5 site-section">
              <div className="container">
                  <div className="row g-5">
                      <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
                          <div className="bg-light rounded h-100 p-5">
                              <div className="section-title">
                                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Nous Contacter</h5>
                                  <h1 className="display-6 mb-4">Contactez le cabinet</h1>
                              </div>
                              <div className="d-flex align-items-center mb-3">
                                  <span className="contact-icon-wrap me-3" aria-hidden="true">
                                    <i className="bi bi-geo-alt text-primary"></i>
                                  </span>
                                  <div className="text-start">
                                      <h5 className="mb-0">Notre Adresse</h5>
                                      <span>Boulevard Colonel Bougara, El Biar, Alger</span>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center mb-3">
                                  <span className="contact-icon-wrap me-3" aria-hidden="true">
                                    <i className="bi bi-envelope-open text-primary"></i>
                                  </span>
                                  <div className="text-start">
                                      <h5 className="mb-0">Nous envoyer un email</h5>
                                      <span>dentistebounab@gmail.com</span>
                                  </div>
                              </div>
                              <div className="d-flex align-items-center">
                                  <span className="contact-icon-wrap me-3" aria-hidden="true">
                                    <i className="bi bi-phone-vibrate text-primary"></i>
                                  </span>
                                  <div className="text-start">
                                      <h5 className="mb-0">Nous Appeler</h5>
                                      <span>0555 91 70 61</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
                          <h4 className="mb-4">Pour une demande de rendez-vous, une douleur dentaire ou une question avant consultation, contactez le cabinet au 0555 91 70 61.</h4>
                          <LazyEmailForm submitLabel="Envoyer par email">
                              <div className="row g-3">
                                  <div className="col-12">
                                      <input type="text" className="form-control border-0 bg-light px-4" name="Nom" placeholder="Votre Nom" style={{ height: "55px" }} required />
                                  </div>
                                  <div className="col-12">
                                      <input type="email" className="form-control border-0 bg-light px-4" name="Email" placeholder="Votre Email" style={{ height: "55px" }} required />
                                  </div>
                                  <div className="col-12">
                                      <input type="text" className="form-control border-0 bg-light px-4" name="Objet" placeholder="Objet" style={{ height: "55px" }} />
                                  </div>
                                  <div className="col-12">
                                      <textarea className="form-control border-0 bg-light px-4 py-3" name="Message" rows="5" placeholder="Message" required></textarea>
                                  </div>
                              </div>
                          </LazyEmailForm>
                      </div>
                      <div className="col-xl-4 col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                          <MapEmbed />
                      </div>
                  </div>
              </div>
          </div>
          
    </>
  );
}
