import author from '@assets/icons/wordProfile/author.svg';
import styles from './WordInfoUser.module.scss';

const user = {
  name: 'Andrew',
  nickName: 'adnFidg',
  added: '1 августа 2023',
};

export default function WordInfoUser() {
  return (
    <div className={styles.user}>
      <div className={styles.flex}>
        <img className={styles.icon} src={author} alt='Автор' />
        <span className={styles.name}>{user.name}</span>

        <span className={styles.nick}>{user.nickName}</span>
      </div>

      <div className={styles.flex}>
        <span className={styles.added}>Добавлено {user.added}</span>
        <span className={styles.ago}>месяц назад</span>
      </div>
    </div>
  );
}
