import type { ReactElement } from "react";
import type { ProductId } from "@/types";

type ProductIllustrationProps = {
  id: ProductId;
  className?: string;
};

const solid = "#2563eb";
const deep = "#0b3c5d";
const light = "#7cb5dd";
const soft = "#dcebf6";

function Background() {
  return (
    <>
      <defs>
        <linearGradient id="tile" x1="0" y1="0" x2="200" y2="200">
          <stop offset="0" stopColor="#f5f7fa" />
          <stop offset="1" stopColor="#dcebf6" />
        </linearGradient>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#0b3c5d" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="200" height="200" rx="24" fill="url(#tile)" />
      <rect width="200" height="200" rx="24" fill="url(#grid)" />
    </>
  );
}

function VMark({ x = 84, y = 86, size = 32 }: { x?: number; y?: number; size?: number }) {
  const half = size / 2;
  return (
    <path
      d={`M${x} ${y - half} L${x + half * 0.85} ${y + half} H${x + half * 0.4} L${x} ${
        y - half * 0.25
      } L${x - half * 0.4} ${y + half} H${x - half * 0.85} Z`}
      fill={solid}
    />
  );
}

const drawings: Record<ProductId, () => ReactElement> = {
  "alta-densidad": () => (
    <>
      <path
        d="M60 58 h80 v74 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 Z"
        fill={soft}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="62" y1="82" x2="138" y2="82" stroke={deep} strokeWidth="3" strokeLinecap="round" />
      <VMark />
    </>
  ),
  "baja-densidad": () => (
    <>
      <path
        d="M58 78 q6 12 12 0 q6 -12 12 0 q6 12 12 0 q6 -12 12 0 q6 12 12 0 q6 -12 12 0 q6 12 12 0 q6 -12 12 0 v58 a8 8 0 0 1 -8 8 H70 a8 8 0 0 1 -8 -8 Z"
        fill={soft}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M70 132 q20 14 40 0 q20 -14 40 0"
        fill="none"
        stroke={deep}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <VMark x={100} y={100} size={26} />
    </>
  ),
  ziploc: () => (
    <>
      <path
        d="M60 64 h80 v74 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 Z"
        fill={soft}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="66" y="88" width="68" height="10" rx="5" fill={solid} />
      <circle cx="100" cy="93" r="3.5" fill="#fff" />
      <VMark x={100} y={120} size={26} />
    </>
  ),
  hielo: () => (
    <>
      <path
        d="M60 58 h80 v74 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 Z"
        fill={soft}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <g stroke={light} strokeWidth="3" fill="#e8f1fa">
        <rect x="70" y="86" width="26" height="22" rx="4" />
        <rect x="104" y="86" width="26" height="22" rx="4" />
        <rect x="84" y="116" width="26" height="22" rx="4" />
      </g>
      <g stroke={deep} strokeWidth="2" fill="none">
        <rect x="70" y="86" width="26" height="22" rx="4" />
        <rect x="104" y="86" width="26" height="22" rx="4" />
        <rect x="84" y="116" width="26" height="22" rx="4" />
      </g>
    </>
  ),
  camiseta: () => (
    <>
      <path
        d="M70 52 h60 v76 a8 8 0 0 1 -8 8 H78 a8 8 0 0 1 -8 -8 Z"
        fill={soft}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M78 56 L72 44 q-8 -12 -16 2 l-10 6 14 14 18 -6 Z"
        fill={light}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M122 56 L128 44 q8 -12 16 2 l10 6 -14 14 -18 -6 Z"
        fill={light}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <VMark x={100} y={106} size={30} />
    </>
  ),
  emplaye: () => (
    <>
      <circle cx="100" cy="102" r="46" fill={soft} stroke={solid} strokeWidth="3" />
      <circle cx="100" cy="102" r="26" fill="#fff" stroke={light} strokeWidth="3" />
      <circle cx="100" cy="102" r="6" fill={deep} />
      <path
        d="M54 102 q12 -14 24 0 t24 0 t24 0 t24 0"
        fill="none"
        stroke={light}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M100 76 v52" stroke={deep} strokeWidth="3" strokeLinecap="round" />
      <path d="M74 92 l26 16 M126 92 l-26 16" stroke={deep} strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  "emplaye-alimentario": () => (
    <>
      <circle cx="100" cy="102" r="46" fill={soft} stroke={solid} strokeWidth="3" />
      <circle cx="100" cy="102" r="26" fill="#fff" stroke={light} strokeWidth="3" />
      <circle cx="100" cy="102" r="6" fill={deep} />
      <path
        d="M54 102 q12 -14 24 0 t24 0 t24 0 t24 0"
        fill="none"
        stroke={light}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M100 76 v52" stroke={deep} strokeWidth="3" strokeLinecap="round" />
      <path d="M74 92 l26 16 M126 92 l-26 16" stroke={deep} strokeWidth="3" strokeLinecap="round" />
      <text x="100" y="112" textAnchor="middle" fontSize="14" fontWeight="700" fill={deep}>
        A+
      </text>
    </>
  ),
  envases: () => (
    <>
      <rect x="62" y="76" width="76" height="62" rx="10" fill={soft} stroke={solid} strokeWidth="3" />
      <rect x="58" y="58" width="84" height="20" rx="8" fill={light} stroke={solid} strokeWidth="3" />
      <rect x="130" y="62" width="14" height="6" rx="3" fill={deep} />
      <VMark x={100} y={108} size={30} />
    </>
  ),
  impresas: () => (
    <>
      <path
        d="M60 58 h80 v74 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 Z"
        fill={soft}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x="66" y="80" width="68" height="4" rx="2" fill={light} />
      <rect x="66" y="88" width="68" height="4" rx="2" fill={deep} opacity="0.55" />
      <rect x="66" y="96" width="68" height="4" rx="2" fill={light} />
      <VMark x={100} y={126} size={26} />
    </>
  ),
  transparente: () => (
    <>
      <path
        d="M60 58 h80 v74 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 Z"
        fill={light}
        stroke={solid}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M60 58 h80 v74 a8 8 0 0 1 -8 8 H68 a8 8 0 0 1 -8 -8 Z"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
      <VMark x={100} y={100} size={28} />
    </>
  ),
};

export default function ProductIllustration({ id, className }: ProductIllustrationProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Ilustración del producto`}
      className={className}
    >
      <Background />
      {drawings[id]()}
    </svg>
  );
}
