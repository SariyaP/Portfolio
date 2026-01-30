import type { Metadata } from "next";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";
import LightboxGallery from "@/src/components/LightboxGallery";

export const metadata: Metadata = {
  title: "About & Contact"
};

const graphics = [
  { src: "/graphic/graphic-1.png", alt: "Graphic design work 1" },
  { src: "/graphic/graphic-2.jpg", alt: "Graphic design work 2" },
  { src: "/graphic/graphic-3.png", alt: "Graphic design work 3" },
  { src: "/graphic/graphic-4.png", alt: "Graphic design work 4" },
  { src: "/graphic/graphic-5.png", alt: "Graphic design work 5" },
  { src: "/graphic/graphic-6.png", alt: "Graphic design work 6" }
];

const assets = [
  { src: "/assets/asset-1.png", alt: "Visual asset 1" },
  { src: "/assets/asset-2.png", alt: "Visual asset 2" },
  { src: "/assets/asset-3.png", alt: "Visual asset 3" },
  { src: "/assets/asset-4.png", alt: "Visual asset 4" }
];

export default function AboutPage() {
  return (
    <Container className="space-y-12">
      <header className="space-y-4">
        <p className="section-kicker">About</p>
        <h1 className="text-4xl font-semibold md:text-5xl">Sariya Punprang</h1>
        <p className="text-lg text-ink/70">
          UX/UI Designer with a frontend development background, enabling effective collaboration and practical design decisions.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="section-title">Visual & Graphic Design</h2>
        <p className="text-base text-ink/70">
          Selected graphic and visual design work created for university projects and departmental
          communication.
        </p>
        <LightboxGallery
          items={graphics}
          gridClassName="grid grid-cols-2 gap-4 md:grid-cols-3"
          itemClassName="bg-white/90"
          aspectClassName="relative aspect-[4/5]"
          imageClassName="object-cover transition-opacity duration-200 group-hover:opacity-90"
        />
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Assets</h2>
        <p className="text-base text-ink/70">
          A curated set of icons, illustrations, and visual assets used across design projects.
        </p>
        <LightboxGallery
          items={assets}
          gridClassName="grid grid-cols-2 gap-4"
          itemClassName="bg-white"
          aspectClassName="relative aspect-square"
          imageClassName="object-contain p-4 transition-opacity duration-200 group-hover:opacity-90"
        />
      </section>

      <section className="grid gap-8 rounded-3xl border border-accent/20 bg-white/90 p-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-accent">Contact</h2>
          <ul className="space-y-2 text-base text-ink/70">
            <li>Phone: (+66) 935619919</li>
            <li>Email: sariyapunprang@gmail.com</li>
            <li>GitHub: SariyaP</li>
            <li>Portfolio: https://sariya-portfolio.vercel.app/</li>
          </ul>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="mailto:sariyapunprang@gmail.com">Email me</Button>
            <Button
              href="https://github.com/SariyaP"
              variant="outline"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
