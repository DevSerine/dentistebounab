import fs from "fs";
import path from "path";

const t = "div";
const o = (attrs) => `<${t}${attrs}>`;
const c = () => `</${t}>`;

function w(file, lines) {
  fs.writeFileSync(path.join("components", file), lines.join("\n") + "\n");
}

w("Topbar.jsx", [
  `import { EMAIL, PHONE_DISPLAY } from "@/lib/constants";`,
  ``,
  `export default function Topbar() {`,
  `  return (`,
  `    ${o(' className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block"')}`,
  `      ${o(' className="row gx-0"')}`,
  `        ${o(' className="col-md-6 text-center text-lg-start mb-2 mb-lg-0"')}`,
  `          ${o(' className="d-inline-flex align-items-center"')}`,
  `            <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Ouvert 24h/24 – 7j/7 du samedi au jeudi.</small>`,
  `          ${c()}`,
  `        ${c()}`,
  `        ${o(' className="col-md-6 text-center text-lg-end"')}`,
  `          ${o(' className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5"')}`,
  `            ${o(' className="me-3 pe-3 border-end py-2"')}`,
  `              <p className="m-0"><i className="fa fa-envelope-open me-2"></i>{EMAIL}</p>`,
  `            ${c()}`,
  `            ${o(' className="py-2"')}`,
  `              <p className="m-0"><i className="fa fa-phone-alt me-2"></i>{PHONE_DISPLAY}</p>`,
  `            ${c()}`,
  `          ${c()}`,
  `        ${c()}`,
  `      ${c()}`,
  `    ${c()}`,
  `  );`,
  `}`,
]);

console.log("built Topbar");
