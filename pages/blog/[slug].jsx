import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import styles from "../../styles/BlogList.module.scss";

const BlogPage = (props) => {
  return (
    <>
      <Head></Head>
      <h2>Blog</h2>
      <ul className={styles.list}>
        {props.posts.map((post, index) => (
          <li key={index}>
            <Link key={index} href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <time date-time={post.date}>{post.date}</time>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticPages = () => {
  const dataDir = "data";
  const fileName = fs.readdirSync(dataDir);
  const paths = fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

export const getStaticProps = () => {
  const dataDir = "data";
  const fileName = fs.readdirSync(dataDir);
  const posts = fileName
    .map((fileName) => {
      const postPath = path.join(dataDir, fileName);
      const file = matter.read(postPath);
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: file.data.title,
        date: file.data.date,
      };
    })
    .sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
