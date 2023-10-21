import { useEffect } from 'react';

import { WordsLayout } from '../../2_widgets/WordsLayout/WordsLayout';
import { WordLayout } from '../../2_widgets/WordLayout/WordLayout';
import { ActivityFilterWords } from '../../3_features/filteringWords';
import { wordsSelector, getWords, Word } from '../../4_entities/words';
import { useAppSelector, useAppDispatch } from '../../5_shared/model';

const Vocabulary = () => {
	const { filteringWords } = useAppSelector(wordsSelector);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getWords());

		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<ActivityFilterWords />
			<WordsLayout>
				{filteringWords.map((word: Word) => {
					return <WordLayout key={word.id} item={word} />;
				})}
			</WordsLayout>
		</div>
	);
};

export default Vocabulary;
