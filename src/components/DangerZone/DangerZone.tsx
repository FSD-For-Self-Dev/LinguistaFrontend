import { VOCAB_DANGER_ROUTE } from '@/router/routes';
import DangerZoneWord from '@components/DangerZone/DangerZoneWords';
import { Carousel } from '@ui/Carousel/Carousel';
import { SectionTitle } from '@ui/SectionTitle';
import { Button } from '@ui/Button';
import CustomLink from '@ui/CustomLink';
import Triangle from '@assets/icons/warning-triangle.svg?react';
import styles from './DangerZone.module.scss';

function DangerZone() {
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title_left}>
					<SectionTitle className={styles.itemRed}>
						<Triangle />
						Зона опасности
					</SectionTitle>

					<p className={styles.itemGrey}>
						Эти слова вот-вот станут неактивными
					</p>
				</div>
				<div className={styles.title_right}>
					<Button className={styles.button}>Спасти!</Button>
					<CustomLink
						target="_self"
						href={VOCAB_DANGER_ROUTE}
						className={styles.linkButton}
					>
						Смотреть все (15)
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
