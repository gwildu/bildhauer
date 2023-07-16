import { Facts } from "./inner-layout/facts";
import { FunctionComponent, useEffect, useState } from "react";

const useDaysLeft = (goal: Date) => {
  const [daysLeft, setDaysLeft] = useState(getDaysLeft(goal));
  useEffect(() => {
    const interval = setInterval(() => {
      setDaysLeft(getDaysLeft(goal));
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);
  return daysLeft;
};

const getDaysLeft = (goal: Date): number => {
  const now = Date.now();
  const difference = goal.getTime() - now;
  const days = difference / (1000 * 60 * 60 * 24);
  return Math.floor(days) + 1;
};
export const DefaultFacts: FunctionComponent = () => {
  const days = useDaysLeft(new Date(2026, 9, 23));
  return (
    <Facts>
      {[
        {
          teaser: "1 Grabmal",
          paragraphs: [
            "erhielt die höchste Auszeichnung:",
            '"Qualitätszeichen mit besonderer Auszeichnung"',
          ],
        },
        {
          teaser: "50 Grabsteine",
          paragraphs: ["aus der Schweiz führen wir in unserem Sortiment"],
        },
        {
          teaser: `${days} Tage`,
          paragraphs: ["bis zu unserem 20 Jahr Jubiläum"],
        },
      ]}
    </Facts>
  );
};
