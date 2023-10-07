import { Button } from '@ui/Button';
import { Carousel } from '@ui/Carousel/Carousel';
import { SectionTitle } from '@ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import { VOCAB_DANGER_ROUTE } from '@/router/routes';
import CustomLink from '@ui/CustomLink';
import DangerZoneWord from '@components/DangerZone/DangerZoneWords';
import Triangle from '@assets/icons/warning-triangle.svg?react';
import styles from './DangerZone.module.scss';

function DangerZone() {
	const { t } = useTranslation('danger-zone');

	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title_left}>
					<SectionTitle className={styles.itemRed}>
						<Triangle />
						{t('title')}
					</SectionTitle>

					<p className={styles.itemGrey}>{t('subTitle')}</p>
				</div>
				<div className={styles.title_right}>
					<Button className={styles.button}>{t('saveAll')}</Button>
					<CustomLink target="_self" href={VOCAB_DANGER_ROUTE} className={styles.linkButton}>
						{t('seeAll')} (15)
					</CustomLink>
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
