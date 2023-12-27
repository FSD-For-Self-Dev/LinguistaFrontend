import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <span className={`${styles.thread} ${styles.thread1}`} />
      <span className={`${styles.thread} ${styles.thread2}`} />
      <span className={`${styles.thread} ${styles.thread3}`} />
    </div>
  );
}
