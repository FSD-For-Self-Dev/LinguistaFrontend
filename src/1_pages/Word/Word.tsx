import WordInfo from '@widgets/WordMainInfo/WordInfo/WordInfo';
import Associations from '@widgets/Associations';
import Synonyms from '@widgets/SynonymsAntonyms/Synonyms';
import Antonyms from '@widgets/SynonymsAntonyms/Antonyms';
import WordCollection from '@widgets/WordCollection/WordCollection';
import styles from './Word.module.scss';

const Word = () => {
  return (
    <div className={styles.container}>
      <WordInfo />
      <WordCollection />
      <Associations />
      <Synonyms />
      <Antonyms />
    </div>
  );
};

export default Word;
