const ArticlePage = (props) => {
  return (
    <div>
      <h1>Article Page</h1>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await import("../../data/article.json");
  const paths = data.articles.map((article) => {
    return {
      params: {
        slug: article.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const data = await import("../../data/article.json");
  const article = data.articles.find((article) => {
    return (article.slug = slug);
  });
  return {
    props: {
      title: article.title,
      body: article.body,
    },
  };
};

export default ArticlePage;
