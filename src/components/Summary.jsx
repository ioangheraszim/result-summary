import { useState, useEffect } from "react";
import "data.json";
import Button from "./Button";

export default function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {});
  return (
    <section className="summary">
      <h2 className="title summary__title">Summary</h2>
      <div className="summary__score-wrap">
        <img className="summary__icon" src="" alt="" />
        <p className="summary__name">Reaction</p>
        <p className="summary__score">
          <span className="summary__score--bold">80</span> / 100
        </p>
      </div>
      <Button />
    </section>
  );
}
