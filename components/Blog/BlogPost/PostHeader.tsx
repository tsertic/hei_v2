import Link from "next/link";
import React from "react";
import { Wrapper } from "../../Layout/Wrapper/Wrapper";
import styles from "./PostHeader.module.scss";
import Image from "next/image";
interface IPostHeader {
  title: string;
  date: string;
  author: string;
  tags: string[];
  mainImage: string;
}
export const PostHeader: React.FC<IPostHeader> = ({
  title,
  author,
  date,
  tags,
  mainImage,
}) => {
  return (
    <header className={styles["post-header"]}>
      <Link href="/blog">{"<"} Povratak na listu</Link>
      <ul className={styles["tags"]}>
        {tags.map((tag, i) => {
          return <li key={i + tag}>#{tag}</li>;
        })}
      </ul>
      <h1>{title}</h1>
      <div className={styles["header-info"]}>
        <span className={styles["author"]}>{author}</span> |{" "}
        <time className={styles["date"]}>{date}</time>
      </div>
      {/*TODO-sa sharenja clanka <div className={styles["social-icons"]}></div> */}

      <div className={styles["header-image"]}>
        <Image src={mainImage} width={1200} height={600} alt={title} />
      </div>
    </header>
  );
};
