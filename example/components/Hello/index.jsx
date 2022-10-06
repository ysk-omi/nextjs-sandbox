import styles from "./Hello.module.scss";

const Hello = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.heading}>Hello!!!</h1>
      <p className={styles.message}>
        これはCSS Modulesを使ったコンポーネントの作例です。
      </p>
    </div>
  );
};

export default Hello;
