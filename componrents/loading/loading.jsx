import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className={styles.loader}>Loading...</p>
    </div>
  );
};

export default Loading;