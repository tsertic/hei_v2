import React from "react";
import styles from "./Wrapper.module.scss";
export const Wrapper: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};
