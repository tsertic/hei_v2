import React from "react";
import styles from "./InfoBox.module.scss";
interface IInfoBox {
  title: string;
  text: string;
}
export const InfoBox = ({ title, text }: IInfoBox) => {
  return (
    <div className={styles["info-box"]}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};
