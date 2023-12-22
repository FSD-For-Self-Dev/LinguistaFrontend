import SynonymAntonymCard from '../SynonymAntonymCard';
import styles from './AntonymsList.module.scss';

export default function AntonymsList() {
  return (
    <div className={styles.list}>
      <SynonymAntonymCard type='antonym' />
      <SynonymAntonymCard type='antonym' />{' '}
      <SynonymAntonymCard type='antonym' />
    </div>
  );
}
