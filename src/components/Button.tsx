import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-sand";

const variants = {
  primary: "bg-accent text-white shadow-soft hover:bg-accent/90",
  outline: "border border-accent text-accent hover:bg-accentSoft/60"
};

type ButtonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = `${baseClasses} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
