import { EMAIL } from "./constants";
import { isContactEmailConfigured } from "./contact-config";
import {
  buildContactEmailParams,
  getEmailJsConfig,
  isEmailJsConfigured,
} from "./emailjs";

export {
  getWeb3FormsAccessKey,
  isContactEmailConfigured,
  isWeb3FormsConfigured,
} from "./contact-config";

/**
 * Envoi depuis le navigateur uniquement (@emailjs/browser ne doit jamais être importé au top-level SSR).
 */
export async function sendContactEmail(data) {
  if (isEmailJsConfigured()) {
    await sendViaEmailJS(data);
    return "emailjs";
  }

  const accessKey = (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "").trim();
  if (accessKey) {
    await sendViaWeb3Forms(data, accessKey);
    return "web3forms";
  }

  throw new Error("NOT_CONFIGURED");
}

async function sendViaEmailJS(data) {
  const { default: emailjs } = await import("@emailjs/browser");
  const { serviceId, templateId, publicKey } = getEmailJsConfig();
  const templateParams = buildContactEmailParams(data);
  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}

async function sendViaWeb3Forms(data, accessKey) {
  const subject =
    data.Objet || `Message depuis le site – Cabinet Dr Bounab`;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: data.Nom,
      email: data.Email,
      subject,
      message: data.Message,
    }),
  });

  const result = await response.json().catch(() => ({}));

  if (!response.ok || !result.success) {
    throw new Error(
      result.message || "Impossible d'envoyer le message pour le moment."
    );
  }
}

export function openMailtoFallback(data) {
  const subject = encodeURIComponent(
    data.Objet || "Contact site Dr Bounab"
  );
  const body = encodeURIComponent(
    `Nom : ${data.Nom}\nEmail : ${data.Email}\n\n${data.Message}`
  );
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
