"use client";

import dynamic from "next/dynamic";

const EmailFormInner = dynamic(() => import("./EmailForm"), {
  ssr: false,
  loading: () => (
    <p className="text-muted small mb-0">Chargement du formulaire...</p>
  ),
});

/** EmailJS est chargé uniquement côté navigateur (évite l'erreur webpack SSR). */
export default function LazyEmailForm(props) {
  return <EmailFormInner {...props} />;
}
