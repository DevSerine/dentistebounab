"use client";

import ClientScripts from "./ClientScripts";

export default function ClientProviders({ children }) {
  return (
    <>
      {children}
      <ClientScripts />
    </>
  );
}
