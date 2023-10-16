import styles from './WordCollection.module.scss';
import CollectionsOfWords from './CollectionsOfWords';
import Notes from './Notes';

const WordCollection = () => {
	return (
		<section className={styles.content}>
			<CollectionsOfWords />
			<Notes />
		</section>
	);
};

export default WordCollection;
