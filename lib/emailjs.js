import { BRAND_NAME, EMAIL } from "./constants";

export function getEmailJsConfig() {
  return {
    serviceId: (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "").trim(),
    templateId: (process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "").trim(),
    publicKey: (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "").trim(),
  };
}

export function isEmailJsConfigured() {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  return Boolean(serviceId && templateId && publicKey);
}

/**
 * Map contact form fields to EmailJS template variables.
 * Configure your EmailJS template with these variable names:
 * {{from_name}}, {{from_email}}, {{subject}}, {{message}}, {{to_email}}, {{cabinet}}
 */
export function buildContactEmailParams(data) {
  return {
    from_name: data.Nom || "",
    from_email: data.Email || "",
    reply_to: data.Email || "",
    subject: data.Objet || `Message depuis le site – ${BRAND_NAME}`,
    message: data.Message || "",
    to_email: EMAIL,
    cabinet: `Cabinet dentaire ${BRAND_NAME}`,
  };
}
