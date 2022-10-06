import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Hello from "../components/Hello/index";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/article/hoge");
  }, []);

  const handleClick = (event) => {
    router.push("/article/hoge");
  };
  return (
    <div>
      <Hello></Hello>
      <Link href="about" scroll={false}>
        About
      </Link>
      <button onClick={handleClick}>Article</button>
    </div>
  );
};

export default RootPage;
