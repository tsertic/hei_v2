import React from "react";
import { BlogCard } from "../../components/Blog/BlogCard/BlogCard";
import { Search } from "../../components/UI/Search";
import styles from "./../../styles/Blog.module.scss";
const Blog = () => {
  return (
    <div className={styles["blog"]}>
      <header className={styles["blog__header"]}>
        <h1 className={styles["blog--title"]}>Blog</h1>
        <Search placeholder="Pretraga po naslovu ili tag-u" />
      </header>
      <div className={styles["blog__list"]}>
        <div className={styles["blog__list--item"]}>
          <BlogCard />
        </div>
        <div className={styles["blog__list--item"]}>
          <BlogCard />
        </div>
        <div className={styles["blog__list--item"]}>
          <BlogCard />
        </div>
        <div className={styles["blog__list--item"]}>
          <BlogCard />
        </div>
        <div className={styles["blog__list--item"]}>
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
