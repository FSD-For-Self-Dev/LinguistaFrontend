import { CardCollection } from '../CardCollection';
import styles from './ListCardCollection.module.scss';

const ListCardCollection = () => {
  return (
    <div className={styles.container}>
      <CardCollection />
      <CardCollection />
      <CardCollection />
    </div>
  );
};
export default ListCardCollection;
