import { INavigationItem } from "./types";
import classes from "./main-navigation.module.css";
import { TextLink } from "../link";
import { FC, useState } from "react";

export const MainNavigation = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={classes.wrapper}>
      <input
        id={"check"}
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        type={"checkbox"}
        className={classes.fakeCheck}
      />
      <label
        title={"Menu anzeigen"}
        htmlFor={"check"}
        className={`${classes.toggle} ${classes.burger}`}
      >
        ≡
      </label>
      <label
        title={"Menu schliessen"}
        htmlFor={"check"}
        className={`${classes.toggle} ${classes.cross}`}
      >
        ⨯
      </label>
      <RecursiveNavigation
        className={`${classes.navi}`}
        onNavigationChange={() => setIsChecked(false)}
      >
        {mainNavigationData}
      </RecursiveNavigation>
    </div>
  );
};

interface IRecursiveNavigation {
  children: MainNavigationData;
  className: string;
  onNavigationChange: () => void;
}

export const RecursiveNavigation: FC<IRecursiveNavigation> = ({
  children: navigationLevelData,
  className,
  onNavigationChange,
}) => {
  const { level } = navigationLevelData[0];
  const levelClass = classes[`level-${level}`];
  return (
    <ul className={`${className} ${levelClass} ${classes.list}`}>
      {navigationLevelData.map(({ name, displayName, path, sub }) => (
        <li key={name} className={`${levelClass} ${classes.item}`}>
          <TextLink
            href={path}
            className={classes.link}
            onClick={onNavigationChange}
          >
            {displayName["de-CH"]}
          </TextLink>
          {sub && (
            <RecursiveNavigation
              className={""}
              onNavigationChange={onNavigationChange}
            >
              {sub}
            </RecursiveNavigation>
          )}
        </li>
      ))}
    </ul>
  );
};

interface IMainNavigationItem extends INavigationItem<IMainNavigationItem> {}

export type MainNavigationData = IMainNavigationItem[];
const mainNavigationData: MainNavigationData = [
  {
    level: 1,
    name: "index",
    displayName: {
      ["de-CH"]: "Startseite",
    },
    path: "/",
  },
  {
    level: 1,
    name: "sculpture",
    displayName: {
      ["de-CH"]: "Bildhauerei",
    },
    path: "/sculpture/grave-markers/index.html",
    sub: [
      {
        level: 2,
        name: "grave markers",
        displayName: {
          ["de-CH"]: "Grabmale",
        },
        path: "/sculpture/grave-markers/index.html",
      },
      {
        level: 2,
        name: "job-offer",
        displayName: {
          ["de-CH"]: "Stellenangebote",
        },
        path: "/job-offer",
      },
    ],
  },
];
