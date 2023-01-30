import React from "react";
import { Wrapper } from "../../Layout/Wrapper/Wrapper";
import styles from "./PostHeader.module.scss";
interface IPostHeader {
  title: string;
  date: string;
  author: string;
  tags: string[];
}
export const PostHeader: React.FC<IPostHeader> = ({
  title,
  author,
  date,
  tags,
}) => {
  return <header className={styles["post-header"]}></header>;
};
