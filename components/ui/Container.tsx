import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Container.module.css";

type ContainerProps = {
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
  className?: string;
  children: ReactNode;
};

export default function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
}: ContainerProps) {
  return <Tag className={cn(styles.container, styles[size], className)}>{children}</Tag>;
}
