import {
  buildContactEmailParams,
  getEmailJsConfig,
  isEmailJsConfigured,
} from "./emailjs";

/** Envoi serveur (EmailJS uniquement) — le formulaire utilise surtout contact-send.js côté client. */
export async function sendContactEmail(data) {
  if (!isEmailJsConfigured()) {
    throw new Error("NOT_CONFIGURED");
  }

  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  const templateParams = buildContactEmailParams(data);

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(detail || "EmailJS : envoi refusé");
  }

  return "emailjs";
}
