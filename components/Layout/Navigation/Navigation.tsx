import React from "react";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div className={styles["navigation"]}>
      <div className={styles["blur-background"]}></div>
      <DesktopNavigation />
      <MobileNavigation />
    </div>
  );
};
