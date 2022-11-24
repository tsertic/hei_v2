import React from "react";
import Link from "next/link";
import styles from "./../Navigation.module.scss";
const NavigationItem = ({ linkPath, text, active, onClick }: any) => {
  return (
    <li
      className={`${styles["nav-item"]} ${
        active && styles["nav-item--active"]
      }`}
      onClick={onClick && onClick}
    >
      <Link href={linkPath}>{text}</Link>
    </li>
  );
};

export default NavigationItem;
