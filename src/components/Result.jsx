export default function Result() {
  return (
    <section className="result" aria-labelledby="result-title">
      <h1 id="result-title" className="title result__title">
        Your Result
      </h1>
      <div
        className="result__score-wrap"
        role="img"
        aria-label="Score: 76 out of 100"
      >
        <p className="result__average">76</p>
        <p>of 100</p>
      </div>
      <div className="result__text">
        <p className="result__word">Great</p>
        <p className="result__info">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}
