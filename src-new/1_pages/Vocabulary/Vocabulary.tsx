import { useEffect } from 'react';

import { ActivityFilterLayout } from '../../2_widgets/ActivityFilterLayout/ActivityFilterLayout';
import { WordsLayout } from '../../2_widgets/WordsLayout/WordsLayout';
import { WordLayout } from '../../2_widgets/WordLayout/WordLayout';
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
