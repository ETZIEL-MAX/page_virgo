import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "light" | "accent";
type Size = "sm" | "md" | "lg";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(styles.button, styles[variant], styles[size], className);

  if (external) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
