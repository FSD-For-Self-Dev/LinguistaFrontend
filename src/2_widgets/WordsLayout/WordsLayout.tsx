import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui';
import SvgIconHistory from '../../5_shared/assets/icons/icon_history.svg?react';
import SvgIconView from '../../5_shared/assets/icons/icon_view.svg?react';
import styles from './WordsLayout.module.scss';

export const WordsLayout = ({ children }: PropsWithChildren) => {
	const { t } = useTranslation('vocabulary');

	return (
		<section>
			<div className={styles.header}>
				<div className={styles.headerStats}>
					<span className={styles.subTitle}>{t('totalWords', { count: 142 })}</span>
				</div>
				<div className={styles.headerActions}>
					<Button className={styles.btn} size="tall">
						{t('addToVocabulary')}
					</Button>
					<Button className={styles.btn} theme="transparent" size="tall">
						{t('addToCollection')}
					</Button>
				</div>
				<div className={styles.headerLinks}>
					<button className="btn-img" title="Посмотреть историю">
						<SvgIconHistory title="Посмотреть историю" />
					</button>
					<button className="btn-img" title="Изменить вид">
						<SvgIconView title="Изменить вид" />
					</button>
				</div>
			</div>
			<div className={styles.list}>{children}</div>
		</section>
	);
};
