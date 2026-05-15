import fs from "fs";
import path from "path";

const e = "motionless";
const E = (attrs = "", selfClose = false) =>
  selfClose ? `<${e}${attrs} />` : `<${e}${attrs}>`;
const C = () => `</${e}>`;

function writeComponent(filename, bodyLines) {
  const content = bodyLines.join("\n") + "\n";
  fs.writeFileSync(
    path.join("components", filename),
    content.replaceAll("motionless", "div")
  );
}

writeComponent("HeroCarousel.jsx", [
  `import Link from "next/link";`,
  `import SiteImage from "./SiteImage";`,
  ``,
  `export default function HeroCarousel() {`,
  `  return (`,
  `    ${E(' id="home" className="container-fluid p-0 mb-5 site-section"')}`,
  `      ${E(' id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel"')}`,
  `        ${E(' className="carousel-inner"')}`,
  `          ${E(' className="carousel-item active"')}`,
  `            <SiteImage`,
  `              className="w-100"`,
  `              src="/img/dentist-giving-mirror-patient-office.jpg"`,
  `              width={1200}`,
  `              height={800}`,
  `              alt="Cabinet dentaire Dr Bounab"`,
  `              priority`,
  `              fetchPriority="high"`,
  `            />`,
  `            ${E(' className="carousel-caption d-flex flex-column align-items-center justify-content-center"')}`,
  `              ${E(' className="hero-content p-3"')}`,
  `                <h5 className="text-white text-uppercase mb-3 animated slideInDown">`,
  `                  Votre sourire, notre priorité.`,
  `                </h5>`,
  `                <h1 className="display-1 text-white mb-md-4 animated zoomIn">`,
  `                  Dr Bounab vous accompagne pour vos soins et Urgences dentaires 24/7`,
  `                </h1>`,
  `                ${E(' className="hero-actions"')}`,
  `                  <Link href="#reservation" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft">Prendre Rendez-vous</Link>`,
  `                  <Link href="#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Nous Contacter</Link>`,
  `                ${C()}`,
  `              ${C()}`,
  `            ${C()}`,
  `          ${C()}`,
  `          ${E(' className="carousel-item"')}`,
  `            <SiteImage`,
  `              className="w-100"`,
  `              src="/img/equipment-dental-instruments-dentist-s-office-tools-close-up.jpg"`,
  `              width={1200}`,
  `              height={800}`,
  `              alt="Consultation dentaire"`,
  `              loading="lazy"`,
  `            />`,
  `            ${E(' className="carousel-caption d-flex flex-column align-items-center justify-content-center"')}`,
  `              ${E(' className="hero-content p-3"')}`,
  `                <h5 className="text-white text-uppercase mb-3 animated slideInDown">`,
  `                  Urgence, prévention et esthétique`,
  `                </h5>`,
  `                <h1 className="display-1 text-white mb-md-4 animated zoomIn">`,
  `                  Une prise en charge claire et professionnelle`,
  `                </h1>`,
  `                ${E(' className="hero-actions"')}`,
  `                  <Link href="#reservation" className="btn btn-primary py-md-3 px-md-5 animated slideInLeft">Prendre Rendez-vous</Link>`,
  `                  <Link href="#contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Nous Contacter</Link>`,
  `                ${C()}`,
  `              ${C()}`,
  `            ${C()}`,
  `          ${C()}`,
  `        ${C()}`,
  `        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">`,
  `          <span className="carousel-control-prev-icon" aria-hidden="true"></span>`,
  `          <span className="visually-hidden">Précédent</span>`,
  `        </button>`,
  `        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">`,
  `          <span className="carousel-control-next-icon" aria-hidden="true"></span>`,
  `          <span className="visually-hidden">Suivant</span>`,
  `        </button>`,
  `      ${C()}`,
  `    ${C()}`,
  `  );`,
  `}`,
]);

console.log("HeroCarousel built");
