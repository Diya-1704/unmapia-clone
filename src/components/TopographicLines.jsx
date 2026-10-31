
export default function TopographicLines() {
  return (
    <div className="topographic-lines" aria-hidden="true">
      <svg viewBox="0 0 1440 900" preserveAspectRatio="none">
        {Array.from({ length: 18 }, (_, i) => (
          <path
            key={i}
            d={`M ${-100 + i * 35} ${100 + i * 12} C 300 ${-100 + i * 28}, 600 ${900 - i * 20}, 1540 ${300 + i * 18}`}
          />
        ))}
      </svg>
    </div>
  );
}
