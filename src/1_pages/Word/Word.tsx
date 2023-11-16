import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IWord } from '@entities/word/model/types';
import { wordApi } from '@entities/word/api/wordApi';
import { DefinitionsWidget } from '@widgets/Definitions';
import WordInfo from '@widgets/WordMainInfo/WordInfo';
import Synonyms from '@widgets/SynonymsAntonyms/Synonyms';
import Antonyms from '@widgets/SynonymsAntonyms/Antonyms';
import Associations from '@widgets/Associations';
import WordCollection from '@widgets/WordCollection';
import styles from './Word.module.scss';

const Word = () => {
	const { slugWord: wordId } = useParams();
	const [word, setWord] = useState<IWord | null>(null);

	useEffect(() => {
		if (!wordId) return;
		wordApi
			.getWordById(wordId)
			.then((data: IWord) =>
				setWord((prevState) => (prevState ? { ...prevState, ...data } : data))
			);
	}, [wordId]);

	return (
		<div className={styles.container}>
			<WordInfo />
			<WordCollection />
			<Associations />
			{word?.definitions && wordId && (
				<DefinitionsWidget count={'10'} items={word?.definitions} wordId={wordId} />
			)}
			<Synonyms />
			<Antonyms />
		</div>
	);
};

export default Word;
