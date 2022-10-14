import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import breaks from "remark-breaks";

const BlogPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | My WebSite</title>
      </Head>
      <article>
        <header>
          <h2>{post.title}</h2>
          <span>
            <time dateTime={post.date}>{post.date}</time>
          </span>
          <ReactMarkdown remarkPlugins={[breaks]}>{post.body}</ReactMarkdown>
        </header>
      </article>
    </>
  );
};

export const getStaticPaths = () => {
  const fileNames = fs.readdirSync("data");
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postPath = path.join("data", `${params.slug}.md`);
  const file = matter.read(postPath);
  const post = {
    title: file.data.title,
    date: file.data.date,
    body: file.content,
  };
  return {
    props: { post },
  };
};

export default BlogPage;
