import { useState, useEffect } from "react";
import Button from "./Button";
import SummaryItem from "./SummaryItem";

export default function Summary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("./data.json");
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <section className="summary" aria-labelledby="summary-title">
      <h2 id="summary-title" className="title summary__title">
        Summary
      </h2>

      <ul>
        {summary.map((smr) => (
          <li key={smr.category}>
            <SummaryItem
              icon={smr.icon}
              category={smr.category}
              score={smr.score}
            />
          </li>
        ))}
      </ul>

      <Button name="Continue" className="btn btn__continue" />
    </section>
  );
}
