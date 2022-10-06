const SSRArticlePage = (props) => {
  return (
    <div>
      <h1>SSR Article</h1>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const slug = context.params.slug;
  const data = await import("../../data/article.json");
  const article = data.articles.find((article) => {
    return article.slug === slug;
  });

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: article,
  };
};

export default SSRArticlePage;
