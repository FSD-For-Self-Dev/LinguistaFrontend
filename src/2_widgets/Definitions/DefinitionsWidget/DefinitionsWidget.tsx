import { useTranslation } from 'react-i18next';
import { DefinitionItem } from './DefinitionItem';
import { ShadowBlockHeader } from '@entities/word/ui';
import { ALL_DEFINITIONS, VOCAB_ROUTE } from '@shared/lib/routes';
import { ShadowBlock, ShadowBlockContent, ShadowBlockFooter } from '@shared/ui';
import type { TDefinition } from '@entities/word/model/types';
import styles from './DefinitionsWidget.module.scss';

type TProps = {
	count: string;
	items: TDefinition[];
	wordId: string;
};

export const DefinitionsWidget = ({ count, items, wordId }: TProps) => {
	const { t } = useTranslation('word-profile');
	const link = `${VOCAB_ROUTE}/${wordId}${ALL_DEFINITIONS}`;

	return (
		<ShadowBlock withPadding={false}>
			<ShadowBlockHeader title={t('definitions')} count={count} />

			<ShadowBlockContent>
				<ul className={styles.list}>
					{items.map((item, index) => (
						<DefinitionItem key={item.id} item={item} index={index + 1} />
					))}
				</ul>
			</ShadowBlockContent>

			<ShadowBlockFooter title={t('allDefinitions')} link={link} />
		</ShadowBlock>
	);
};
