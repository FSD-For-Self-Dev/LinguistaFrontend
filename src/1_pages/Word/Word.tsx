import WordInfo from '@widgets/WordMainInfo/WordInfo';
import WordCollection from '@widgets/WordCollection';
import Associations from '@widgets/Associations';
import Synonyms from '@widgets/SynonymsAntonyms/Synonyms';
import Antonyms from '@widgets/SynonymsAntonyms/Antonyms';
import styles from './Word.module.scss';
import WordForms from '@widgets/WordForms/WordForms';

const Word = () => {
	return (
		<div className={styles.container}>
			<WordInfo />
			<WordCollection />
			<Associations />
			<WordForms />
			<Synonyms />
			<Antonyms />
		</div>
	);
};

export default Word;
