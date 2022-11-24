import React from "react";
import styles from "./Button.module.scss";
import Link from "next/link";
interface IButton {
  type?: string;
  text: string;
  link?: string;
  onClick?: any;
}
const Button = ({ type = "regular", text, link = "#", onClick }: IButton) => {
  return (
    <Link
      onClick={onClick && onClick}
      href={link}
      className={`${styles["button"]} ${
        type === "wide" ? styles["wide"] : styles["regular"]
      }`}
    >
      {text}
    </Link>
  );
};

export default Button;
