import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="appContainer">
      <div className="mainContainer">
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
