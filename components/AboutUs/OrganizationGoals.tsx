import React from "react";
import styles from "./OrganizationGoals.module.scss";
import { CILJEVI } from "./../../db/CILJEVI";
export const OrganizationGoals = () => {
  return (
    <div className={styles["organization-goals"]}>
      <div id="goals" className={styles["goals-anchor"]}></div>
      <h1>CILJEVI UDRUGE</h1>
      <ul className={styles["goals-list"]}>
        {CILJEVI.map((goal) => {
          return (
            <li key={goal.id}>
              <h3>{goal.title}</h3>
              <p>{goal.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
