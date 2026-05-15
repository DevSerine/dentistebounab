"use client";

import Image from "next/image";
import { useState } from "react";

const PLACEHOLDER =
  "data:image/svg+xml," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><rect fill="#dceff8" width="1200" height="800"/></svg>'
  );

export default function SiteImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  loading,
  fetchPriority,
  style,
  fill = false,
  sizes,
  quality = 82,
}) {
  const [failed, setFailed] = useState(false);
  const imageLoading = priority ? undefined : loading || "lazy";

  const defaultSizes = fill
    ? "100vw"
    : width >= 1000
      ? "100vw"
      : width >= 600
        ? "(max-width: 768px) 100vw, 50vw"
        : "(max-width: 768px) 100vw, 25vw";

  const shared = {
    alt: alt || "",
    className,
    priority,
    loading: imageLoading,
    fetchPriority,
    style,
    quality,
    sizes: sizes || defaultSizes,
    onError: () => setFailed(true),
  };

  if (failed) {
    if (fill) {
      return (
        <img
          src={PLACEHOLDER}
          alt={alt || ""}
          className={className}
          style={{ ...style, objectFit: "cover", width: "100%", height: "100%" }}
          loading={imageLoading}
          decoding="async"
        />
      );
    }
    return (
      <img
        src={PLACEHOLDER}
        alt={alt || ""}
        width={width}
        height={height}
        className={className}
        style={style}
        loading={imageLoading}
        decoding="async"
      />
    );
  }

  if (fill) {
    return (
      <Image src={src} fill {...shared} />
    );
  }

  return (
    <Image
      src={src}
      width={width}
      height={height}
      {...shared}
    />
  );
}
