import { TDefinition } from '@entities/word/model/types';
import { DefinitionsList } from './list';
import { DefinitionHeader } from './header';

type TProps = {
	count: string;
	items: TDefinition[];
};

const Definitions = ({ count, items }: TProps) => {
	return (
		<section>
			<DefinitionHeader total={count} />
			<DefinitionsList items={items} />
		</section>
	);
};

export default Definitions;
