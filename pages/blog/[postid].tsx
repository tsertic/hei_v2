import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import { PostHeader } from "../../components/Blog/BlogPost/PostHeader";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { client } from "../../lib/sanity.client";
//TODO post type interface
const BlogPostPage: React.FC<{ post: any }> = ({ post }) => {
  console.log(post);

  if (!post) {
    return (
      <Wrapper>
        <h1>Loading...</h1>
      </Wrapper>
    );
  }
  const authorName = post.author.name;
  const title = post.title;
  const tags = post.categories.map(
    (category: { title: any }) => category.title
  );
  const readableDate = new Date(post.publishedAt).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return <Wrapper>{/* <PostHeader /> */}</Wrapper>;
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context.params);
  if (!context.params) {
    return {
      props: {
        post: null,
      },
    };
  }
  const slug = context.params.postid;
  const postListData = await client.fetch(`
    \*[_type=="post"]{
      ...,
      categories[]->,
      author->
    }
  `);
  const post = postListData.find(
    (post: { slug: { current: string | string[] | undefined } }) =>
      post.slug.current === slug
  );
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postListData = await client.fetch(`
    \*[_type=="post"]{
      ...,
      categories[]->,
      author->
    }
  `);
  const pathsList = postListData.map((post: { slug: { current: any } }) => {
    return { params: { postid: post.slug.current } };
  });
  return {
    paths: pathsList,
    fallback: true,
  };
};
