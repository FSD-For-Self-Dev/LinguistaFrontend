import SynonymAntonymCard from '../SynonymAntonymCard';
import styles from './SynonymsList.module.scss';

export default function SynonymsList() {
	return (
		<div className={styles.list}>
			<SynonymAntonymCard />
			<SynonymAntonymCard />
			<SynonymAntonymCard />
		</div>
	);
}
