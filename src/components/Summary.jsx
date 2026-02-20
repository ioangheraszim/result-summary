import { useState, useEffect } from "react";
import Button from "./Button";
import SummaryItem from "./SummaryItem";

export default function Summary() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("../../data.json");
        const data = await res.json();
        setSummary(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  return (
    <section className="summary">
      <h2 className="title summary__title">Summary</h2>
      {summary.map((smr) => (
        <SummaryItem
          key={smr.category}
          icon={smr.icon}
          category={smr.category}
          score={smr.score}
        />
      ))}
      <Button name="Continue" className="btn btn__continue" />
    </section>
  );
}
