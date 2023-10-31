import { Button } from '@ui/Button';
import { Carousel } from '@ui/Carousel/Carousel';
import { SectionTitle } from '@ui/SectionTitle';
import { useTranslation } from 'react-i18next';
import { VOCAB_DANGER_ROUTE } from '@/router/routes';
import CustomLink from '@ui/CustomLink';
import DangerZoneWord from '@components/DangerZone/DangerZoneWords';
import Fire from '@assets/icons/fire-red.svg?react';
import { TWordStatus, TWordLevel, TWordType } from '@/shared/interfaces/IWordCard';
import styles from './DangerZone.module.scss';

function DangerZone() {
	const { t } = useTranslation('danger-zone');

	const yourItems = [
		{
			item: {
				word: 'Learn',
				status: 'Активное' as TWordStatus,
				level: 'A1' as TWordLevel,
				type: 'глагол' as TWordType,
			},
			isLast: false,
		},
		{
			item: {
				word: 'Learn',
				status: 'Активное' as TWordStatus,
				level: 'A1' as TWordLevel,
				type: 'глагол' as TWordType,
			},
			isLast: false,
		},
		{
			item: {
				word: 'Learn',
				status: 'Активное' as TWordStatus,
				level: 'A1' as TWordLevel,
				type: 'глагол' as TWordType,
			},
			isLast: false,
		},
		{
			item: {
				word: 'Learn',
				status: 'Активное' as TWordStatus,
				level: 'A1' as TWordLevel,
				type: 'глагол' as TWordType,
			},
			isLast: false,
		},
		{
			item: {
				word: 'Learn',
				status: 'Активное' as TWordStatus,
				level: 'A1' as TWordLevel,
				type: 'глагол' as TWordType,
			},
			isLast: true,
		},
	];
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.title_left}>
					<SectionTitle className={styles.itemRed}>
						<Fire />
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
				{yourItems.map((element, index) => (
					<DangerZoneWord item={element.item} key={index} />
				))}
				{/* <DangerZoneWord item={{ word: 'Learn', status: 'Активное', level: 'A1', type: 'глагол' }} />
				<DangerZoneWord item={{ word: 'Learn', status: 'Активное', level: 'A1', type: 'глагол' }} />
				<DangerZoneWord item={{ word: 'Learn', status: 'Активное', level: 'A1', type: 'глагол' }} />
				<DangerZoneWord item={{ word: 'Learn', status: 'Активное', level: 'A1', type: 'глагол' }} />
				<DangerZoneWord item={{ word: 'Learn', status: 'Активное', level: 'A1', type: 'глагол' }} /> */}
			</Carousel>
		</div>
	);
}
export default DangerZone;
