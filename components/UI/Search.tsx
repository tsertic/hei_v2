import React, { useRef } from "react";
import styles from "./Search.module.scss";
export const Search = ({ placeholder, value, changeHandler }: any) => {
  return (
    <div className={styles["search"]}>
      <img src="/assets/images/search-icon.svg" alt="search icon" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};
