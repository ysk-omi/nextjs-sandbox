const SSGPage = (props) => {
  return (
    <div>
      <div>{props.message}</div>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://api.github.com/zen");
  const text = await res.text();
  return {
    props: {
      message: text,
    },
  };
};

export default SSGPage;
