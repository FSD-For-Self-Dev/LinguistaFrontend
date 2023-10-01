import styles from './DangerZoneWords.module.scss';
import Triangle from './tooltips/Triangle';
import Fire from './tooltips/Fire';

function DangerZoneWords() {
	return (
		<div className={styles.container}>
			<div className={styles.icons_container}>
				<Triangle />
				<Fire />
			</div>
		</div>
	);
}

export default DangerZoneWords;
