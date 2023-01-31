import React from "react";
import { BlogCard } from "../../components/Blog/BlogCard/BlogCard";
import { Search } from "../../components/UI/Search";
import { client, urlFor } from "../../lib/sanity.client";
import styles from "./../../styles/Blog.module.scss";
//TODO add types for post
const Blog: React.FC<{ posts: any }> = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles["blog"]}>
      <header className={styles["blog__header"]}>
        <h1 className={styles["blog--title"]}>Blog</h1>
        <Search placeholder="Pretraga po naslovu ili tag-u" />
      </header>
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
    </div>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const postListData = await client.fetch(`
    \*[_type=="post" && (
      !(_id in path("drafts.**")))]{
      ...,
      categories[]->,
      author->
    }
  `);

  return {
    props: {
      posts: postListData,
    },
    revalidate: 120,
  };
};
