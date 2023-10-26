import styles from './Loader.module.scss';

export const Loader = () => {
	return (
		<div className={styles.loader}>
			<span className={`${styles.thread} ${styles.thread1}`}></span>
			<span className={`${styles.thread} ${styles.thread2}`}></span>
			<span className={`${styles.thread} ${styles.thread3}`}></span>
		</div>
	);
};
