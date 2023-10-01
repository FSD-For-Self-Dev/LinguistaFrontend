import { Link } from 'react-router-dom';

import DangerZoneWord from '@components/DangerZone/DangerZoneWords';

import triangle from '@assets/icons/warning-triangle.svg';
import styles from './DangerZone.module.scss';

function DangerZone() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title_left}>
					<img src={triangle} alt="warning triangle" />
					<p className={styles.itemRed}>Зона опасности</p>
					<p className={styles.itemGrey}>
						Эти слова вот-вот станут неактивными
					</p>
				</div>
				<div className={styles.title_right}>
					<button className={styles.helpButton}>Спасти!</button>
					<Link to="/dangerZoneCards" className={styles.linkButton}>
						{/* TODO счетчик кол-ва карточек (вместо цифры 15) */}
						Смотри все (15)
					</Link>
				</div>
			</div>
			<div className={styles.slider}>
				<DangerZoneWord />
				<DangerZoneWord />
				<DangerZoneWord />
				<DangerZoneWord />
			</div>
		</div>
	);
}
export default DangerZone;
