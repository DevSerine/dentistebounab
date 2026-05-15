"use client";

import { useEffect, useRef, useState } from "react";
import { GOOGLE_MAPS_EMBED } from "@/lib/constants";

export default function MapEmbed() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="map-embed-wrap position-relative rounded w-100 h-100">
      {show ? (
        <iframe
          className="position-relative rounded w-100 h-100 map-frame"
          width={600}
          height={450}
          src={GOOGLE_MAPS_EMBED}
          style={{ minHeight: "400px", border: 0 }}
          allowFullScreen
          title="Cabinet dentaire Dr Bounab – El Biar sur Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div
          className="map-frame map-frame-placeholder"
          style={{ minHeight: "400px" }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
