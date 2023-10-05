import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@ui/Button';
import { Carousel } from '@ui/Carousel/Carousel';
import DangerZoneWord from '@components/DangerZone/DangerZoneWords';

import triangle from '@assets/icons/warning-triangle.svg';
import styles from './DangerZone.module.scss';

function DangerZone() {
	const { t } = useTranslation('danger-zone');

	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title_left}>
					<img src={triangle} alt="warning triangle" />
					<p className={styles.itemRed}>{t('title')}</p>
					<p className={styles.itemGrey}>{t('subTitle')}</p>
				</div>
				<div className={styles.title_right}>
					<Button className={styles.button}>{t('saveAll')}</Button>

					<Link to="/dangerZoneCards" className={styles.linkButton}>
						{/* TODO счетчик кол-ва карточек (вместо цифры 15) */}
						{t('seeAll')} (15)
					</Link>
				</div>
			</div>

			<Carousel
				arrows
				slides={4}
				className={styles.carousel}
				sliderClass={styles.slider}
				buttonClass={styles.arrows}
			>
				<DangerZoneWord />
				<DangerZoneWord />
				<DangerZoneWord />
				<DangerZoneWord />
				<DangerZoneWord />
			</Carousel>
		</div>
	);
}
export default DangerZone;
