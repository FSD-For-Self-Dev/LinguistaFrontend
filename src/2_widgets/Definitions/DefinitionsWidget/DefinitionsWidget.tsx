import { useTranslation } from 'react-i18next';
import { DefinitionsList } from '../DefinitionsList';
import { WidgetContainer, WidgetHeader, WidgetFooter, WidgetContent } from '@shared/ui/widget';
import { ALL_DEFINITIONS, VOCAB_ROUTE } from '@shared/lib/routes';
import type { TDefinition } from '@entities/word/model/types';

type TProps = {
	count: string;
	items: TDefinition[];
	wordId: string;
};

export const DefinitionsWidget = ({ count, items, wordId }: TProps) => {
	const { t } = useTranslation('word-profile');
	const link = `${VOCAB_ROUTE}/${wordId}${ALL_DEFINITIONS}`;

	return (
		<WidgetContainer>
			<WidgetHeader title={t('definitions')} count={count} />
			<WidgetContent>
				<DefinitionsList items={items} />
			</WidgetContent>
			<WidgetFooter title={t('allDefinitions')} link={link} />
		</WidgetContainer>
	);
};
