export default function BillCard({ className = "", speed, kicker, amount, meta, children }) {
  return (
    <div className={`bill-card draggable ${className}`} data-speed={speed} aria-hidden="true">
      <svg className="bill-icon" viewBox="0 0 64 64" aria-hidden="true">
        {children}
      </svg>
      <span className="bill-kicker">{kicker}</span>
      <strong>{amount}</strong>
      <span className="bill-meta">{meta}</span>
    </div>
  );
}
