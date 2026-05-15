export default function Footer() {
  return (
    <>
      
          <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="container pt-5">
                  <div className="row g-5 pt-4">
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Liens Rapides</h3>
                          <div className="d-flex flex-column justify-content-start">
                              <a className="text-light mb-2" href="#home"><i className="bi bi-arrow-right text-primary me-2"></i>Accueil</a>
                              <a className="text-light mb-2" href="#about"><i className="bi bi-arrow-right text-primary me-2"></i>À Propos</a>
                              <a className="text-light mb-2" href="#reservation"><i className="bi bi-arrow-right text-primary me-2"></i>Rendez-vous</a>
                              <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Nos Services</a>
                              <a className="text-light" href="#contact"><i className="bi bi-arrow-right text-primary me-2"></i>Contactez-nous</a>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Soins proposés</h3>
                          <div className="d-flex flex-column justify-content-start">
                              <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Contrôle dentaire</a>
                              <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Douleur ou urgence</a>
                              <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Carie ou plombage</a>
                              <a className="text-light mb-2" href="#services"><i className="bi bi-arrow-right text-primary me-2"></i>Extraction dentaire</a>
                              <a className="text-light" href="#reservation"><i className="bi bi-arrow-right text-primary me-2"></i>Demande de rendez-vous</a>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Contactez-nous</h3>
                          <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>El Biar, Alger</p>
                          <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>dentistebounab@gmail.com</p>
                          <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>0555 91 70 61</p>
                          <p className="mb-0"><i className="bi bi-map text-primary me-2"></i><a href="https://www.google.com/maps/place/Dentiste+dr+bounab+H24+7%2F7/@36.7684005,3.0315389,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb3001a68ca17:0xaf883c8ecb26015a!8m2!3d36.7684005!4d3.0315389!16s%2Fg%2F11w1d9nm0h?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D" className="text-white" target="_blank" rel="noopener">Voir sur Google Maps</a></p>
                      </div>
                      <div className="col-lg-3 col-md-6">
                          <h3 className="text-white mb-4">Contact direct</h3>
                          <p className="mb-4">Pour un rendez-vous, indiquez votre nom, votre motif et vos disponibilités.</p>
                          <a className="btn btn-lg btn-primary rounded" href="https://wa.me/213555917061?text=Bonjour%20Dr Bounab%2C%20je%20souhaite%20prendre%20rendez-vous." target="_blank" rel="noopener"><i className="fab fa-whatsapp me-2"></i>WhatsApp</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="container-fluid text-light py-4" style={{ background: "#051225" }}>
              <div className="container">
                  <div className="row g-0">
                      <div className="col-md-6 text-center text-md-start">
                          <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#home">Cabinet Dentaire Dr Bounab</a>. Tous droits réservés.</p>
                      </div>
                      <div className="col-md-6 text-center text-md-end">
                          <p className="mb-0 small">Dentiste Dr Bounab H24 7/7 · Cabinet dentaire ouvert H24 7j/7 · Urgence dentaire El Biar · Soins dentaires à El Biar</p>
                      </div>
                  </div>
              </div>
          </div>
          
    </>
  );
}
