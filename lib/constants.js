export const BRAND_NAME = "Dentiste Bounab";

const PRODUCTION_SITE_URL = "https://VOTRE-DOMAINE.com";

const rawSiteUrl =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
    ? process.env.NEXT_PUBLIC_SITE_URL.trim()
    : "";

/** URL canonique (http/https) pour metadata et schémas — valeur invalide = fallback */
const isValidPublicUrl =
  rawSiteUrl &&
  /^https?:\/\//i.test(rawSiteUrl) &&
  !/^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?(?:\/|$)/i.test(rawSiteUrl);

export const SITE_URL = isValidPublicUrl
  ? rawSiteUrl.replace(/\/$/, "")
  : PRODUCTION_SITE_URL;
/**
 * NOTE: définissez NEXT_PUBLIC_SITE_URL dans votre environnement de production
 * pour remplacer la valeur de démonstration https://VOTRE-DOMAINE.com.
 */

export const WHATSAPP_NUMBER = "213555917061";

export const PHONE_DISPLAY = "0555 91 70 61";

export const EMAIL = "dentistebounab@gmail.com";

export const ADDRESS_LINE = "Boulevard Colonel Bougara, El Biar, Alger";

export const ADDRESS_SEO = "Boulevard Colonel Bougara, El Biar, Alger";

export const LOGO_PATH = "/img/ChatGPT%20Image%20May%2015%2C%202026%2C%2006_04_26%20PM.svg";

export const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d3.0315389!3d36.7684005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb3001a68ca17:0xaf883c8ecb26015a!2sDentiste+dr+bounab+H24+7%2F7!5e0!3m2!1sen!2sdz!4v1603794290143!5m2!1sen!2sdz";

export const GOOGLE_MAPS_PLACE =
  "https://www.google.com/maps/place/Dentiste+dr+bounab+H24+7%2F7/@36.7684005,3.0315389,17z/data=!3m1!4b1!4m6!3m5!1s0x128fb3001a68ca17:0xaf883c8ecb26015a!8m2!3d36.7684005!4d3.0315389!16s%2Fg%2F11w1d9nm0h?entry=ttu&g_ep=EgoyMDI2MDUxMi4wIKXMDSoASAFQAw%3D%3D";

export const WHATSAPP_GREETING = "Bonjour Dentiste Bounab";

export function whatsAppUrl(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
