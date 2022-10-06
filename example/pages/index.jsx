import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AppHead from "../components/AppHead/index";
import Hello from "../components/Hello/index";

const RootPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/article/2020-purgecss-2");
  }, []);

  const handleClick = (event) => {
    router.push("/article/2020-purgecss-2");
  };
  return (
    <>
      <AppHead
        title={`TOP`}
        description={`his is my Next.js SandBox`}
      ></AppHead>
      <Hello></Hello>
      <Link href="about" scroll={false}>
        About
      </Link>
      <button onClick={handleClick}>Article</button>
      <div style={{ height: "3000px" }}></div>
      <Image
        src="/sea.jpg"
        alt="海"
        width={600}
        height={400}
        quality={90} // 画質を設定
        priority={true} // 先読み指定
      ></Image>
    </>
  );
};

export default RootPage;
