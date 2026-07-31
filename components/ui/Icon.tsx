import {
  Award,
  BadgeCheck,
  BadgeDollarSign,
  Factory,
  Gem,
  Handshake,
  Headphones,
  Leaf,
  Lightbulb,
  Ruler,
  ShieldCheck,
  Truck,
  Cog,
  Car,
  Store,
  Utensils,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  BadgeDollarSign,
  Gem,
  Handshake,
  Headphones,
  Leaf,
  Lightbulb,
  Ruler,
  ShieldCheck,
  Truck,
  Factory,
  Cog,
  Car,
  Store,
  Utensils,
};

type IconProps = {
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

export default function Icon({ name, size = 24, strokeWidth = 1.8, className }: IconProps) {
  const Component = iconMap[name] ?? BadgeCheck;
  return <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />;
}
