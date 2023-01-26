import React from "react";
import styles from "./BlogCard.module.scss";
import Link from "next/link";
import Image from "next/image";
export const BlogCard = () => {
  return (
    <div className={styles["blog-card"]}>
      <div className={styles["tag-container"]}>
        <span>#tag1</span>
        <span>#tag2</span>
      </div>
      <div className={styles["img-container"]}>
        <Image
          width={560}
          height={280}
          src="/assets/images/test-blog-image.png"
          alt="blog related"
        />
      </div>
      <div className={styles["blog-card__info"]}>
        <p className={styles["date"]}>05th November,2021</p>
        <h1 className={styles["title"]}>LOREM IPSUM DOLOR SIT</h1>
        <p className={styles["description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link href="/blog/p1" className={styles["btn"]}>
          Vidi Više {">"}
        </Link>
      </div>
    </div>
  );
};
