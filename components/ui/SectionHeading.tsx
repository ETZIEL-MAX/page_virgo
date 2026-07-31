import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  index?: string;
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  inverse = false,
  index,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        styles.heading,
        styles[align],
        inverse && styles.inverse,
        className,
      )}
    >
      {eyebrow || index ? (
        <p className={`${styles.eyebrow} mono`}>
          {index ? <span className={styles.index}>{index}</span> : null}
          {eyebrow ? <span>{eyebrow}</span> : null}
        </p>
      ) : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
