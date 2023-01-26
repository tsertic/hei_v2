import React from "react";
import Link from "next/link";
import styles from "./../Navigation.module.scss";
import { useRouter } from "next/router";

const NavigationItem = ({ linkPath, text, active, onClick }: any) => {
  const routePath = useRouter().asPath;

  return (
    <li
      className={`${styles["nav-item"]} ${
        routePath === linkPath && styles["nav-item--active"]
      }`}
      onClick={onClick && onClick}
    >
      <Link href={linkPath}>{text}</Link>
    </li>
  );
};

export default NavigationItem;
