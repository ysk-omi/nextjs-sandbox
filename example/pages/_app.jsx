import NextHead from "next/head";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <NextHead>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </NextHead>
      <div className="appContainer">
        <div className="mainContainer">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default MyApp;
