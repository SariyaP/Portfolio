"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
};

export default function ProjectImage({
  src,
  alt,
  className,
  priority,
  unoptimized
}: ProjectImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        aria-label={alt}
        className={`flex h-full w-full items-center justify-center rounded-2xl border border-dashed border-accent/30 bg-gradient-to-br from-white via-accentSoft/40 to-white text-xs uppercase tracking-[0.2em] text-ink/50 ${
          className ?? ""
        }`}
      >
        Image Placeholder
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={720}
      priority={priority}
      unoptimized={unoptimized}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
