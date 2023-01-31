import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next/types";
import React from "react";
import { PostBody } from "../../components/Blog/BlogPost/PostBody";
import { PostHeader } from "../../components/Blog/BlogPost/PostHeader";
import { Wrapper } from "../../components/Layout/Wrapper/Wrapper";
import { client, urlFor } from "../../lib/sanity.client";
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
  const mainImage = post.mainImage ? urlFor(post.mainImage).url() : "";
  const authorName = post.author.name;
  const title = post.title;

  const postBody = post.body;
  const previewText = post.previewText;
  const tags = post.categories.map(
    (category: { title: any }) => category.title
  );
  const readableDate = new Date(post.publishedAt).toLocaleDateString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const headTitle = `HEI-${title}`;
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="description" content={previewText} key="desc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={previewText} />
        <meta property="og:image" content={mainImage} />
        <meta property="twitter:image" content={mainImage} />
        <meta property="twitter:title " content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://esportinicijativa.hr" />
        <meta name="twitter:creator" content={authorName} />
      </Head>
      <Wrapper>
        {" "}
        <PostHeader
          title={title}
          tags={tags}
          date={readableDate}
          author={authorName}
          mainImage={mainImage}
        />{" "}
        <PostBody postBody={postBody} />
      </Wrapper>
    </>
  );
};

export default BlogPostPage;

export const getStaticProps: GetStaticProps = async (context) => {
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
