import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Button } from '@shared/ui';
import { wordApi } from '@entities/word/api/wordApi';
import { TDefinition } from '@entities/word/model/types';
import { DefinitionsList } from '@widgets/Definitions';
import { WordOriginal } from '@widgets/WordMainInfo/WordInfo';
import styles from './DefinitionsPage.module.scss';
import { IWord } from '@widgets/WordMainInfo/WordInfo/WordInfo';
import { EmptyCard } from '@/2_widgets/EmptyCard';

const info: IWord = {
	word: 'Jump in at the deep end',
	status: 'ACTIVE',
	level: 'A1',
	type: 'глагол',
	favorite: true,
};

const DefinitionPage = () => {
	const { t } = useTranslation('definition-page');
	const { slugWord: wordId } = useParams();
	const [definitions, setDefinitions] = useState<TDefinition[] | null>([]);

	useEffect(() => {
		if (!wordId) return;
		wordApi
			.getAllDefinitions(wordId)
			.then((data: TDefinition[]) =>
				setDefinitions((prevState) => (prevState ? [...prevState, ...data] : data))
			);
	}, [wordId]);

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1>{t('title')}</h1>
				<Button size="tall">+&nbsp;{t('addDefinition')}</Button>
			</div>
			<WordOriginal info={info} classname={styles.word} />
			{definitions?.length && <DefinitionsList items={definitions} />}
			<EmptyCard message="Нет добавленных определений" />
		</div>
	);
};

export default DefinitionPage;
