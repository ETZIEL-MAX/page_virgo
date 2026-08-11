import Image from "next/image";
import { cn } from "@/lib/utils";
import styles from "./Logo.module.css";

type LogoProps = {
  inverse?: boolean;
  className?: string;
};

export default function Logo({ inverse = false, className }: LogoProps) {
  return (
    <span className={cn(styles.logo, inverse && styles.inverse, className)}>
      <Image
        src="/images/logo_sf_v3.png"
        alt="Plásticos Virgo"
        width={420}
        height={420}
        sizes="(max-width: 640px) 108px, 140px"
        className={styles.image}
        priority
      />
      <span className={styles.wordmark}>
        Plásticos<strong>Virgo</strong>
      </span>
    </span>
  );
}
