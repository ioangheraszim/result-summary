export default function SummaryItem({ icon, category, score }) {
  return (
    <div className={`summary__score-wrap summary-${category.toLowerCase()}`}>
      <div className="summary__name-wrap">
        <img className="summary__icon" src={icon} alt={category} />
        <p className={`summary__name summary__name--${category.toLowerCase()}`}>
          {category}
        </p>
      </div>
      <p className="summary__score">
        <span className="summary__score--bold">{score}</span> / 100
      </p>
    </div>
  );
}
