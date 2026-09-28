type AarnaMarkProps = {
  className?: string;
};

const MARK_PATH = "M200 30 42 330h83l30-73h90l30 73h83L200 30Zm0 102 24 66h-48l24-66Z";
const EDGE_PATH = "M66 312 200 55l134 257M141 233h118";

export function AarnaGlow() {
  return <ellipse className="aarna-glow" cx="200" cy="190" rx="172" ry="150" />;
}

export function AarnaLightSweep() {
  return <path className="aarna-light" d={EDGE_PATH} pathLength="530" />;
}

export function AarnaMark({ className = "" }: AarnaMarkProps) {
  return (
    <svg
      viewBox="0 0 400 360"
      className={`aarna-mark ${className}`}
      role="img"
      aria-label="Aarna"
    >
      <defs>
        <radialGradient id="aarna-glow-gradient">
          <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.28" />
          <stop offset="55%" stopColor="var(--brand-accent)" stopOpacity="0.07" />
          <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aarna-mark-gradient" x1="10%" y1="5%" x2="90%" y2="95%">
          <stop offset="0%" stopColor="var(--brand-bright)" />
          <stop offset="42%" stopColor="var(--brand-accent)" />
          <stop offset="76%" stopColor="var(--brand-gold)" />
          <stop offset="100%" stopColor="var(--brand-dark-gold)" />
        </linearGradient>
        <filter id="aarna-soft-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="15" />
        </filter>
      </defs>
      <AarnaGlow />
      <path className="aarna-mark-body" d={MARK_PATH} fillRule="evenodd" />
      <path className="aarna-mark-edge" d={EDGE_PATH} pathLength="530" />
      <AarnaLightSweep />
    </svg>
  );
}
