import { isEmailJsConfigured } from "./emailjs";

export function getWeb3FormsAccessKey() {
  return (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "").trim();
}

export function isWeb3FormsConfigured() {
  return Boolean(getWeb3FormsAccessKey());
}

export function isContactEmailConfigured() {
  return isEmailJsConfigured() || isWeb3FormsConfigured();
}
