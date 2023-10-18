import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { WordCard } from '../WordCard/WordCard';
import { Word, getWords, wordsSelector } from '../../../../4_entities/words';
import { Button } from '../../../../5_shared/ui';
import SvgIconHistory from '../../../../5_shared/assets/icons/icon_history.svg?react';
import SvgIconView from '../../../../5_shared/assets/icons/icon_view.svg?react';
import { useAppSelector } from '../../../../5_shared/model';
import styles from './WordsList.module.scss';
import { useDispatch } from 'react-redux';

export const WordsList = () => {
	const { t } = useTranslation('vocabulary');
	const { filteringWords } = useAppSelector(wordsSelector);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getWords());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
			<div className={styles.list}>
				{filteringWords.map((wordItem: Word) => {
					return <WordCard item={wordItem} key={wordItem.id} />;
				})}
			</div>
		</section>
	);
};
