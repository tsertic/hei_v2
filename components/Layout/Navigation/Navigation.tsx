import React from "react";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles["navigation"]}>
      <DesktopNavigation />
    </div>
  );
};
