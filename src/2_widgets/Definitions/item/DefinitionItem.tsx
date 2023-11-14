import { TDefinition } from '@/4_entities/word/model/types';
import { CardContainer } from '@shared/ui';

type TProps = {
	item: TDefinition;
};

export const DefinitionItem = ({ item }: TProps) => {
	const { id, text, popularity } = item;
	return (
		<CardContainer>
			{id}
			{text}
			{popularity}
		</CardContainer>
	);
};
