import NextHead from "next/head";

const AppHead = ({ title, description, slug }) => {
  return (
    <NextHead>
      <title>{`${title} | Next.js Sand Box`}</title>
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`http://localhost:3000/articles/${slug}`}
      />
      <meta property="og:title" content={`${title} | Next.js Sand Box`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="http://localhost:3000/ogp.png" />
    </NextHead>
  );
};

export default AppHead;
