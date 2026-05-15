/**
 * Lit emailjs.credentials.json et met à jour .env.local avec les clés EmailJS.
 * Usage : copiez emailjs.credentials.json.example → emailjs.credentials.json, remplissez, puis :
 *   npm run email:sync
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const credPath = path.join(root, "emailjs.credentials.json");
const envPath = path.join(root, ".env.local");

if (!fs.existsSync(credPath)) {
  console.error(
    "Fichier manquant : emailjs.credentials.json\n" +
      "Copiez emailjs.credentials.json.example et ajoutez vos IDs depuis https://dashboard.emailjs.com"
  );
  process.exit(1);
}

const cred = JSON.parse(fs.readFileSync(credPath, "utf8"));
const { serviceId, templateId, publicKey } = cred;

if (!serviceId || !templateId || !publicKey) {
  console.error("Remplissez serviceId, templateId et publicKey dans emailjs.credentials.json");
  process.exit(1);
}

const defaults = `# Site Dr Bounab — configuration locale (non versionnée)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
CONTACT_EMAIL=dentistebounab@gmail.com
`;

let env = fs.existsSync(envPath) ? fs.readFileSync(envPath, "utf8") : defaults;

function setVar(name, value) {
  const line = `${name}=${value}`;
  const re = new RegExp(`^${name}=.*$`, "m");
  env = re.test(env) ? env.replace(re, line) : `${env.trimEnd()}\n${line}\n`;
}

setVar("NEXT_PUBLIC_EMAILJS_SERVICE_ID", serviceId);
setVar("NEXT_PUBLIC_EMAILJS_TEMPLATE_ID", templateId);
setVar("NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", publicKey);

if (cred.web3formsAccessKey) {
  setVar("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY", cred.web3formsAccessKey);
}

fs.writeFileSync(envPath, env.endsWith("\n") ? env : `${env}\n`);
console.log("OK — .env.local mis à jour avec EmailJS.");
console.log("Redémarrez : npm run dev");
