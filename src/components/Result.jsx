export default function Result() {
  return (
    <section className="result">
      <h2 className="title result__title"></h2>
      <div className="result__score-wrap">
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
