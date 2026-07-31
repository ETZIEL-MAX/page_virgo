import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Badge.module.css";

type BadgeProps = {
  children: ReactNode;
  tone?: "blue" | "green" | "neutral";
  className?: string;
};

export default function Badge({ children, tone = "blue", className }: BadgeProps) {
  return <span className={cn(styles.badge, styles[tone], className)}>{children}</span>;
}
