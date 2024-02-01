import { useTranslation } from 'react-i18next';
import styles from './Popularity.module.scss';

export type TPopularity = 'high' | 'medium' | 'low';

type TProps = {
	popularity: TPopularity;
};

export function Popularity({ popularity }: TProps) {
	const { t } = useTranslation('popularity');

	return (
		<p className={styles.popularity}>
			{t('popularity')}: <span className={styles[`${popularity}`]}>{t(popularity)}</span>
		</p>
	);
}
