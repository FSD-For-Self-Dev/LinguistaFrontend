import { useEffect } from 'react';

import { LanguageFilterLayout } from '@widgets/LanguageFilterLayout/LanguageFilterLayout';
import { ActivityFilterLayout } from '@widgets/ActivityFilterLayout/ActivityFilterLayout';
import { WordsLayout } from '@widgets/WordsLayout/WordsLayout';
import { WordLayout } from '@widgets/WordLayout/WordLayout';
import { sessionSelector } from '@entities/session';
import { wordsSelector, getVocabulary, Word } from '@entities/words';
import { useAppSelector, useAppDispatch } from '@shared/model';
import styles from './Vocabulary.module.scss';

const Vocabulary = () => {
	const { filteringWords } = useAppSelector(wordsSelector);
	const { sessionKey } = useAppSelector(sessionSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (sessionKey) dispatch(getVocabulary(sessionKey));

		// eslint-disable-next-line
	}, [sessionKey]);

	return (
		<div className={styles['vocabulary-container']}>
			<LanguageFilterLayout />
			<ActivityFilterLayout />
			<WordsLayout>
				{filteringWords.map((word: Word) => {
					return <WordLayout key={word.id} item={word} />;
				})}
			</WordsLayout>
		</div>
	);
};

export default Vocabulary;
