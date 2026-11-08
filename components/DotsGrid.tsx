interface DotsGridProps {
  topLabel: string;
  bottomLabel: string;
  total?: number;
  filledIndices?: number[];
  accentIndices?: number[];
}

export function DotsGrid({
  topLabel,
  bottomLabel,
  total = 48,
  filledIndices = [1, 5, 10, 12, 19, 21, 26, 30, 35, 38, 44],
  accentIndices = [14, 33],
}: DotsGridProps) {
  const dots = Array.from({ length: total }, (_, i) => {
    let className = "";
    if (accentIndices.includes(i)) {
      className = "acc";
    } else if (filledIndices.includes(i)) {
      className = "on";
    }
    return { id: i, className };
  });

  return (
    <aside className="cell s4 dots-cell cross" aria-hidden="true">
      <span className="mono">{topLabel}</span>
      <div className="dots" id="dots">
        {dots.map((dot) => (
          <span key={dot.id} className={dot.className || undefined} />
        ))}
      </div>
      <span className="mono">{bottomLabel}</span>
    </aside>
  );
}
