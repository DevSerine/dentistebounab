import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const html = fs.readFileSync(path.join(root, "DentCare/index.html"), "utf8");

function extract(startMarker, endMarker) {
  const start = html.indexOf(startMarker);
  const end = html.indexOf(endMarker, start);
  if (start === -1 || end === -1) {
    throw new Error(`Missing marker for ${startMarker}`);
  }
  return html.slice(start, end);
}

function toJsx(fragment, { useLink = true } = {}) {
  let jsx = fragment;
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, "");
  jsx = jsx.replace(/\sclass=/g, " className=");
  jsx = jsx.replace(/\sfor=/g, " htmlFor=");
  jsx = jsx.replace(/\stabindex=/g, " tabIndex=");
  jsx = jsx.replace(/\sframeborder=/gi, " frameBorder=");
  jsx = jsx.replace(/\sallowfullscreen/gi, " allowFullScreen");
  jsx = jsx.replace(/\sreferrerpolicy=/gi, " referrerPolicy=");
  jsx = jsx.replace(/style="([^"]*)"/g, (_, style) => {
    const obj = style
      .split(";")
      .filter(Boolean)
      .map((rule) => {
        const [k, v] = rule.split(":").map((s) => s.trim());
        const camel = k.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `${camel}: ${JSON.stringify(v)}`;
      })
      .join(", ");
    return `style={{ ${obj} }}`;
  });
  jsx = jsx.replace(/src="img\//g, 'src="/img/');
  jsx = jsx.replace(
    /background-image: url\('img\/([^']+)'\)/g,
    "backgroundImage: \"url('/img/$1')\""
  );
  if (useLink) {
    jsx = jsx.replace(/<a href="#/g, '<Link href="#');
    jsx = jsx.replace(/<a href="https:\/\/wa\.me/g, '<a href="https://wa.me');
    jsx = jsx.replace(/<\/a>/g, (match, offset, str) => {
      const before = str.slice(Math.max(0, offset - 80), offset);
      if (before.includes('<Link href="#')) return "</Link>";
      return match;
    });
  }
  jsx = jsx.replace(
    /<img([^>]*)\/?>/g,
    (tag, attrs) => {
      const src = attrs.match(/src="([^"]+)"/)?.[1];
      const width = attrs.match(/width="(\d+)"/)?.[1];
      const height = attrs.match(/height="(\d+)"/)?.[1];
      const alt = attrs.match(/alt="([^"]*)"/)?.[1] || '""';
      const className = attrs.match(/className="([^"]+)"/)?.[1];
      const loading = attrs.includes('loading="lazy"') ? '\n              loading="lazy"' : "";
      const priority = attrs.includes("fetchpriority") ? "\n              priority\n              fetchPriority=\"high\"" : "";
      const style = attrs.includes("object-fit")
        ? '\n              style={{ objectFit: "cover" }}'
        : "";
      if (!src || !width || !height) return tag;
      return `<SiteImage
              src="${src}"
              width={${width}}
              height={${height}}
              alt={${JSON.stringify(alt.replace(/^"|"$/g, ""))}}
              className="${className || ""}"${loading}${priority}${style}
            />`;
    }
  );
  jsx = jsx.replace(
    /<form className="whatsapp-form" data-message-prefix="([^"]*)">/g,
    '<WhatsAppForm messagePrefix="$1">'
  );
  jsx = jsx.replace(/<\/form>/g, "</WhatsAppForm>");
  return jsx;
}

const sections = [
  ["About", "<!-- About Start -->", "<!-- About End -->"],
  ["Reservation", "<!-- Reservation Start -->", "<!-- Reservation End -->"],
  ["Services", "<!-- Service Start -->", "<!-- Service End -->"],
  ["Team", "<!-- Team Start -->", "<!-- Team End -->"],
  ["Contact", "<!-- Contact Start -->", "<!-- Contact End -->"],
  ["CallToAction", "<!-- Call To Action Start -->", "<!-- Call To Action End -->"],
  ["Footer", "<!-- Footer Start -->", "<!-- Footer End -->"],
];

const imports = `import Link from "next/link";
import SiteImage from "./SiteImage";
import WhatsAppForm from "./WhatsAppForm";
`;

for (const [name, start, end] of sections) {
  const body = extract(start, end);
  let jsx = toJsx(body);
  if (name === "Reservation") {
    jsx = jsx.replace(
      'messagePrefix="Bonjour Dr Bounab, je souhaite prendre rendez-vous."',
      'messagePrefix="Bonjour Dr Bounab, je souhaite prendre rendez-vous."'
    );
  }
  const file = `export default function ${name}() {
  return (
    <>
${jsx
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    </>
  );
}
`;
  fs.writeFileSync(
    path.join("components", `${name}.jsx`),
    imports + "\n" + file
  );
  console.log("Wrote", name);
}

// WhatsApp float + back to top
const float = extract("<!-- WhatsApp Float -->", "<!-- Back to Top -->");
const backTop = extract("<!-- Back to Top -->", "<!-- JavaScript Libraries -->");

fs.writeFileSync(
  "components/WhatsAppFloat.jsx",
  `export default function WhatsAppFloat() {
  return (
    <>
${toJsx(float, { useLink: false })
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    </>
  );
}
`
);

fs.writeFileSync(
  "components/BackToTop.jsx",
  `export default function BackToTop() {
  return (
    <>
${toJsx(backTop, { useLink: false })
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    </>
  );
}
`
);

console.log("Done");
