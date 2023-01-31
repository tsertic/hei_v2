import Image from "next/image";
import React from "react";
import styles from "./Search.module.scss";
export const Search = ({ placeholder, value, changeHandler }: any) => {
  return (
    <div className={styles["search"]}>
      <Image
        src="/assets/images/search-icon.svg"
        alt="search icon"
        width={32}
        height={32}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={changeHandler}
      />
    </div>
  );
};
