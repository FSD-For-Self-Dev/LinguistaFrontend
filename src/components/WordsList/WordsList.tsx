import { useTranslation } from 'react-i18next';
import { Button } from '@ui/Button';
import { WordCard } from './WordCard';
import SvgIconHistory from '@assets/icons/icon_history.svg?react';
import SvgIconView from '@assets/icons/icon_view.svg?react';
import { data } from '@/utils/mocks';
import styles from './WordsList.module.scss';

const WordsList = () => {
	const { t } = useTranslation('vocabulary');

	const wordsList = data.map((wordItem, idx) => {
		return <WordCard item={wordItem} key={idx} />;
	});

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
			<div className={styles.list}>{wordsList}</div>
		</section>
	);
};

export default WordsList;
