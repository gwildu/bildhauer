import classes from "./facts.module.css";

export const Facts = ({ children: factItems }) => {
  return (
    <ul className={classes.facts}>
      {factItems.map(({ teaser, paragraphs }) => {
        return (
          <li key={teaser} className={classes.item}>
            <p className={classes.teaser}>{teaser}</p>
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </li>
        );
      })}
    </ul>
  );
};
