import WordInfo from '@widgets/WordMainInfo/WordInfo';
import WordCollection from '@widgets/WordCollection';
import Associations from '@widgets/Associations';
import Synonyms from '@widgets/SynonymsAntonyms/Synonyms';
import Antonyms from '@widgets/SynonymsAntonyms/Antonyms';
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
