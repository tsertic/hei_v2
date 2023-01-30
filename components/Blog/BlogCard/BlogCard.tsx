import React from "react";
import styles from "./BlogCard.module.scss";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../../lib/sanity.client";
//TODO types for sanity objects and data
export const BlogCard: React.FC<{ blogData: any }> = ({ blogData }) => {
  const {
    previewText,
    mainImage,
    publishedAt,
    categories,
    body,
    author,
    title,
    slug,
  } = blogData;
  const tags = categories.map((tag: any) => tag.title);
  return (
    <div className={styles["blog-card"]}>
      <div className={styles["tag-container"]}>
        {tags.map((tag: any) => (
          <span key={tag} id={tag}>
            #{tag}
          </span>
        ))}
      </div>
      <div className={styles["img-container"]}>
        <Image
          width={560}
          height={280}
          src={urlFor(mainImage).url()}
          alt="blog related"
        />
      </div>
      <div className={styles["blog-card__info"]}>
        <p className={styles["date"]}>05th November,2021</p>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["description"]}>{previewText}</p>
        <Link href={`/blog/${slug.current}`} className={styles["btn"]}>
          Vidi Više {">"}
        </Link>
      </div>
    </div>
  );
};
