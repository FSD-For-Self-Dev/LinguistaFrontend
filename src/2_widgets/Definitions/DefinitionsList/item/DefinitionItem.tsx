import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CardContainer, Popularity, WordSubMenu } from '@shared/ui';
import { TDefinition } from '@entities/word/model/types';
import SvgIconRelated from '@shared/assets/icons/icon_related.svg?react';
import styles from './DefinitionItem.module.scss';

type TProps = {
	item: TDefinition;
};

export const DefinitionItem = ({ item }: TProps) => {
	const { text, popularity } = item;
	const { t } = useTranslation('word-profile');

	return (
		<CardContainer className={styles.container}>
			<div className={styles.top}>
				<Link to="/" className={styles.link}>
					<SvgIconRelated />
					{t('relatedExamples')}
				</Link>
				<WordSubMenu colorTheme={'dark'} />
			</div>
			<p className={styles.definition}>{text}</p>
			{popularity && <Popularity popularity={popularity} />}
		</CardContainer>
	);
};
