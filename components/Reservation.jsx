import { WHATSAPP_GREETING, whatsAppUrl } from "@/lib/constants";
import WhatsAppForm from "./WhatsAppForm";

export default function Reservation() {
  return (
    <>
      
          <div id="reservation" className="container-fluid py-4 reservation-bg site-section" style={{ backgroundImage: "url('/img/heal-specialist-procedure-cure-patient.jpg')" }}>
              <div className="container position-relative" style={{ zIndex: 2 }}>
                  <div className="row g-5 align-items-center">
                      <div className="col-lg-5 wow slideInUp" data-wow-delay="0.1s">
                          <div className="reservation-intro text-white">
                              <h5 className="text-white text-uppercase mb-3">Rendez-vous</h5>
                              <h2 className="text-white mb-4">Réservez simplement votre consultation</h2>
                              <p className="mb-4">Décrivez votre besoin en quelques mots. Le cabinet vous recontacte pour confirmer l’horaire le plus adapté.</p>
                              <div className="reservation-step wow fadeInUp" data-wow-delay="0.1s">
                                  <span>1</span>
                                  <p>Indiquez vos coordonnées.</p>
                              </div>
                              <div className="reservation-step wow fadeInUp" data-wow-delay="0.2s">
                                  <span>2</span>
                                  <p>Précisez le motif : douleur, contrôle, esthétique ou autre soin.</p>
                              </div>
                              <div className="reservation-step wow fadeInUp" data-wow-delay="0.3s">
                                  <span>3</span>
                                  <p>Envoyez votre demande ou contactez directement le cabinet.</p>
                              </div>
                              <a
                                href={whatsAppUrl(
                                  `${WHATSAPP_GREETING}, je souhaite prendre rendez-vous pour une consultation dentaire.`
                                )}
                                className="btn btn-secondary py-3 px-5 mt-3"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                WhatsApp : 0555 91 70 61
                              </a>
                          </div>
                      </div>
                      <div className="col-lg-7 wow slideInUp" data-wow-delay="0.3s">
                          <div className="bg-light rounded h-100 p-5">
                              <div className="section-title">
                                  <h5 className="position-relative d-inline-block text-primary text-uppercase">Demande de rendez-vous</h5>
                                  <h3 className="display-6 mb-4">Quelques informations pour mieux vous orienter</h3>
                              </div>
                              <WhatsAppForm
                                messagePrefix="Bonjour Dr Bounab, je souhaite prendre rendez-vous."
                                requiredFields={["Nom", "Téléphone", "Motif"]}
                                submitLabel="Envoyer la demande sur WhatsApp"
                              >
                                  <div className="row g-3">
                                      <div className="col-12 col-sm-6">
                                          <input type="text" className="form-control border-0" name="Nom" placeholder="Nom et prénom" style={{ height: "55px" }} required />
                                      </div>
                                      <div className="col-12 col-sm-6">
                                          <input
                                            id="reservation-tel"
                                            type="tel"
                                            className="form-control border-0"
                                            name="Téléphone"
                                            placeholder="Téléphone (obligatoire)"
                                            style={{ height: "55px" }}
                                            required
                                            inputMode="tel"
                                            autoComplete="tel"
                                            minLength={9}
                                            maxLength={20}
                                            pattern="^[\s\+]?[\d\s\.\-]{9,}$"
                                            title="Saisissez un numéro valide (au moins 9 chiffres, ex. 0555 91 70 61)"
                                            aria-required="true"
                                          />
                                      </div>
                                      <div className="col-12 col-md-4">
                                          <label className="form-label fw-semibold text-dark">Motif de consultation</label>
                                          <select
                                            className="form-select border-0"
                                            name="Motif"
                                            style={{ height: "55px" }}
                                            defaultValue=""
                                            required
                                          >
                                              <option value="" disabled hidden>
                                                Choisir un motif
                                              </option>
                                              <option>Contrôle dentaire</option>
                                              <option>Douleur dentaire ou urgence</option>
                                              <option>Carie ou plombage</option>
                                              <option>Extraction dentaire</option>
                                              <option>Blanchiment des dents</option>
                                              <option>Esthétique du sourire</option>
                                              <option>Appareil dentaire / ODF</option>
                                              <option>Suivi après soin</option>
                                              <option>Autre demande</option>
                                          </select>
                                      </div>
                                      <div className="col-12 col-md-4">
                                          <label className="form-label fw-semibold text-dark">Date souhaitée</label>
                                          <input type="date" className="form-control border-0" name="Date souhaitée" style={{ height: "55px" }} />
                                      </div>
                                      <div className="col-12 col-md-4">
                                          <label className="form-label fw-semibold text-dark">Horaire souhaité</label>
                                          <input type="time" className="form-control border-0" name="Horaire souhaité" style={{ height: "55px" }} />
                                      </div>
                                      <div className="col-12">
                                          <textarea className="form-control border-0" name="Message" rows="5" placeholder="Décrivez brièvement votre besoin : douleur, dent concernée, depuis quand, traitement souhaité..."></textarea>
                                      </div>
                                  </div>
                              </WhatsAppForm>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
    </>
  );
}
