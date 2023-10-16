import Associations from '@/modules/Associations/Associations';
import WordCollection from '@/modules/WordCollection';
import WordInfo from '@modules/WordMainInfo/WordInfo';
import Synonyms from '@/modules/SynonymsAntonyms/Synonyms';
import Antonyms from '@/modules/SynonymsAntonyms/Antonyms';
import styles from './WordProfile.module.scss';

export default function WordProfile() {
	return (
		<div className={styles.container}>
			<WordInfo />
			<WordCollection />
			<Associations />
			<Synonyms />
			<Antonyms />
		</div>
	);
}
