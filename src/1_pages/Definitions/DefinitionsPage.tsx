import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Button } from '@shared/ui';
import { wordApi } from '@entities/word/api/wordApi';
import { TDefinition } from '@entities/word/model/types';
import { WordPageStatus } from '@entities/word/ui';
import { DefinitionsList } from '@widgets/Definitions';
import SVGIconDefinitions from '@shared/assets/icons/sections/definitions.svg?react';
import SVGIconPlus from '@shared/assets/icons/actions/plus.svg?react';
import styles from './DefinitionsPage.module.scss';

const DefinitionPage = () => {
	const { t } = useTranslation('definition-page');
	const { slugWord: wordId } = useParams();
	const [definitions, setDefinitions] = useState<TDefinition[] | null>([]);

	useEffect(() => {
		if (!wordId) return;
		wordApi.getAllDefinitions(wordId).then((data: TDefinition[]) => setDefinitions(data));
	}, [wordId]);

	if (!definitions?.length) {
		return (
			<WordPageStatus title={t('emptyDefinitionMessage')} icon={<SVGIconDefinitions />}>
				<Button size="small">
					<SVGIconPlus />
					{t('addDefinition')}
				</Button>
				<Button size="small">Тренировать</Button>
			</WordPageStatus>
		);
	}

	return (
		<div className={styles.container}>
			<WordPageStatus
				title={t('title', { count: definitions?.length })}
				icon={<SVGIconDefinitions />}
			>
				<Button theme={'transparent'} size="small">
					<SVGIconPlus />
					{t('addDefinition')}
				</Button>
				<Button size="small">Тренировать</Button>
			</WordPageStatus>

			{definitions?.length && <DefinitionsList items={definitions} />}
		</div>
	);
};

export default DefinitionPage;
