import { useRouter } from "next/router";

const AuthorArticlePage = () => {
  const router = useRouter();
  const author = router.query.author;
  const slug = router.query.slug;
  return (
    <div>
      <h1>Author Article Page: {slug}</h1>
      <p>Author: {author}</p>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  );
};

export default AuthorArticlePage;
