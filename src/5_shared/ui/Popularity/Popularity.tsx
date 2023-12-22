import cx from 'classnames';
import styles from './Popularity.module.scss';

interface Props {
  popularity: 'высокая' | 'средняя' | 'низкая';
}

export function Popularity({ popularity }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.popularity}>Популярность:</span>
      <span
        className={cx(
          styles.popularity,
          styles.popularity_level,
          styles[`popularity_level_${popularity}`],
        )}
      >
        {popularity}
      </span>
    </div>
  );
}
