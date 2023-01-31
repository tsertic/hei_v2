import React from "react";
import { BlogCard } from "./BlogCard";
import styles from "./BlogCardsList.module.scss";
//TODO ADD TS TYPE FOR IPOST
type IPost = any;
export const BlogCardsList: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  return (
    <div className={styles["blog__list"]}>
      {posts.map((post: any) => {
        return (
          <div
            key={Math.random().toString()}
            className={styles["blog__list--item"]}
          >
            <BlogCard blogData={post} />
          </div>
        );
      })}
    </div>
  );
};
