"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type GalleryItem = {
  src: string;
  alt: string;
};

type LightboxGalleryProps = {
  items: GalleryItem[];
  itemClassName?: string;
  imageClassName?: string;
  gridClassName?: string;
  aspectClassName?: string;
};

export default function LightboxGallery({
  items,
  itemClassName,
  imageClassName,
  gridClassName,
  aspectClassName
}: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex]);

  return (
    <>
      <div className={gridClassName}>
        {items.map((item, index) => (
          <button
            type="button"
            key={item.src}
            className={`group relative overflow-hidden rounded-2xl border border-accent/20 bg-white shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
              itemClassName ?? ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${item.alt}`}
          >
            <div className={aspectClassName}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                className={imageClassName}
                sizes="(min-width: 768px) 33vw, 50vw"
              />
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && mounted
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-6"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                className="absolute inset-0 h-full w-full cursor-default"
                onClick={() => setActiveIndex(null)}
                aria-label="Close image preview"
              />
              <div className="relative z-10 max-h-[85vh] w-full max-w-5xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="absolute right-2 top-2 rounded-full border border-white/40 bg-black/60 px-3 py-1 text-xs font-semibold text-white"
                >
                  Close
                </button>
                <div className="relative h-[85vh] w-full">
                  <Image
                    src={items[activeIndex].src}
                    alt={items[activeIndex].alt}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
