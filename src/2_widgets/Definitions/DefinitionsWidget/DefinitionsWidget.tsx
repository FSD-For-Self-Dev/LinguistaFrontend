import { TDefinition } from '@entities/word/model/types';
import { DefinitionsList } from '../DefinitionsList';
import { DefinitionHeader } from './header';
import { ALL_DEFINITIONS, VOCAB_ROUTE } from '@/5_shared/lib/routes';

type TProps = {
	count: string;
	items: TDefinition[];
	wordId: string;
};

export const DefinitionsWidget = ({ count, items, wordId }: TProps) => {
	const link = `${VOCAB_ROUTE}/${wordId}${ALL_DEFINITIONS}`;
	return (
		<section>
			<DefinitionHeader total={count} linkToDefinitionsPage={link} />
			<DefinitionsList items={items} />
		</section>
	);
};
