import styles from './CardNote.module.scss';

const CardNote = () => {
  return (
    <div className={styles.content}>
      <span className={styles.date}>10 августа 2023</span>
      <p className={styles.note}>Не используется в официальном стиле</p>
    </div>
  );
};

export default CardNote;
