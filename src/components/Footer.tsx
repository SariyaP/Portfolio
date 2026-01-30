import Link from "next/link";
import Container from "@/src/components/Container";

export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-white/60 py-10">
      <Container className="flex flex-col gap-3 text-sm text-ink/70 md:flex-row md:items-center md:justify-between">
        <span>© 2026 Sariya Punprang. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="mailto:sariyapunprang@gmail.com" className="link-underline">
            sariyapunprang@gmail.com
          </Link>
          <Link
            href="https://github.com/SariyaP"
            className="link-underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </div>
      </Container>
    </footer>
  );
}
