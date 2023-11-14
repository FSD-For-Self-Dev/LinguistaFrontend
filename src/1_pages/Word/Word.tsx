import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IWord } from '@entities/word/model/types';
import { wordApi } from '@entities/word/api/wordApi';
import WordInfo from '@widgets/WordMainInfo/WordInfo';
import Synonyms from '@widgets/SynonymsAntonyms/Synonyms';
import Antonyms from '@widgets/SynonymsAntonyms/Antonyms';
import Definitions from '@widgets/Definitions';
import Associations from '@widgets/Associations';
import WordCollection from '@widgets/WordCollection';
import styles from './Word.module.scss';

const Word = () => {
	const navigate = useNavigate();
	const { slugWord: wordId } = useParams();
	const [word, setWord] = useState<IWord | null>(null);

	useEffect(() => {
		if (!wordId) return navigate('/404');

		wordApi
			.getWordById(wordId)
			.then((data: IWord) =>
				setWord((prevState) => (prevState ? { ...prevState, ...data } : data))
			);
	}, [navigate, wordId]);

	return (
		<div className={styles.container}>
			{word?.text}
			<WordInfo />
			<WordCollection />
			<Associations />
			{word?.definitions && <Definitions count={'10'} items={word?.definitions} />}
			<Synonyms />
			<Antonyms />
		</div>
	);
};

export default Word;
