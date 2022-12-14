import React from "react";
import Button from "../../../UI/Button";
import styles from "./../Navigation.module.scss";
import NavigationItem from "./NavigationItem";
const LINKDATA = [
  {
    path: "/",
    text: "home",
    active: true,
    id: 0,
  },
  {
    id: 1,
    path: "/blog",
    text: "blog",
    active: false,
  },
  {
    id: 2,
    path: "contact",
    text: "kontakt",
    active: false,
  },
  { id: 3, path: "/aboutus", text: "o nama", active: false },
];
export const DesktopNavigation = () => {
  return (
    <nav className={styles["desktop-navigation"]}>
      <ul className={styles["main-navigation"]}>
        {LINKDATA.map((liItem) => (
          <NavigationItem
            key={liItem.id}
            linkPath={liItem.path}
            text={liItem.text}
            active={liItem.active}
          />
        ))}
      </ul>
      <div className={styles["cta-container"]}>
        <div className={styles["feedback-container"]}>
          <img src="/assets/images/feedback-icon.svg" alt="fedback icon" />
        </div>
        <div className={styles["language-container"]}>
          <img src="/assets/images/lang-icon.svg" alt="globe icon" />
          <span className={styles["selected-lang"]}>HR</span>
          <span>EN</span>
        </div>
        <Button text="uclani se u udrugu" link="/membership" />
      </div>
    </nav>
  );
};
