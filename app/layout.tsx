import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const displayFont = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700"]
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: {
    default: "Sariya Punprang | UX/UI Designer & Frontend Developer",
    template: "%s | Sariya Punprang"
  },
  description:
    "UX/UI Designer & Frontend Developer with experience in building responsive web interfaces and user-centered designs.",
  metadataBase: new URL("https://your-portfolio-url.com")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <Navbar />
        <main className="py-10 md:py-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
