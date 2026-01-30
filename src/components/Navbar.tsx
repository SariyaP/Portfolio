import Link from "next/link";
import Container from "@/src/components/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" }
];

export default function Navbar() {
  return (
    <header className="border-b border-accent/20 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="text-lg font-semibold tracking-[0.25em] text-accent">
          SARIYA
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-ink">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-underline">
              {link.label}
            </Link>
          ))}
          <Link
            href="https://github.com/SariyaP"
            className="link-underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
          <Link href="mailto:sariyapunprang@gmail.com" className="link-underline">
            Email
          </Link>
        </nav>
      </Container>
    </header>
  );
}
