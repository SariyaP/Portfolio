import Link from "next/link";
import Container from "@/src/components/Container";
import Button from "@/src/components/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center gap-4">
      <p className="section-kicker">404</p>
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="text-lg text-ink/70">
        The page you are looking for doesn’t exist. Try heading back to the homepage.
      </p>
      <Button href="/">Back to home</Button>
      <Link href="/projects" className="text-sm font-semibold text-accent link-underline">
        Browse projects →
      </Link>
    </Container>
  );
}
