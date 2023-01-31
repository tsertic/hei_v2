import React, { useEffect, useState } from "react";
import { BlogCardsList } from "../../components/Blog/BlogCard/BlogCardsList";
import { Search } from "../../components/UI/Search";
import { client } from "../../lib/sanity.client";
import styles from "./../../styles/Blog.module.scss";
type IPost = any;
//TODO add types for post
const Blog: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>();
  const [filterValue, setFilterValue] = useState("");
  if (!posts) {
    return <div>Loading...</div>;
  }
  const filterChangeHandler = (e: any) => {
    const value = e.target.value;

    const filteredData = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const lowerValue = value.toLowerCase();
      if (title.includes(lowerValue)) {
        return post;
      }
      const tagsList = post.categories;
      for (const tag of tagsList) {
        if (tag.title.toLowerCase().includes(lowerValue)) {
          return post;
        }
      }
    });

    setFilterValue(value);
    setFilteredPosts(filteredData);
  };

  return (
    <div className={styles["blog"]}>
      <header className={styles["blog__header"]}>
        <h1 className={styles["blog--title"]}>Blog</h1>
        <Search
          placeholder="Pretraga po naslovu ili tag-u"
          value={filterValue}
          changeHandler={filterChangeHandler}
        />
      </header>
      <BlogCardsList posts={filteredPosts ? filteredPosts : posts} />
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
    revalidate: 3600,
  };
};
