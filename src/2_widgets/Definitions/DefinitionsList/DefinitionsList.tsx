import { TDefinition } from '@/4_entities/word/model/types';
import { DefinitionItem } from './item';
import styles from './DefinitionsList.module.scss';

type TProps = {
	items: TDefinition[];
};

export const DefinitionsList = ({ items }: TProps) => {
	return (
		<ul className={styles.list}>
			{items.map((item, index) => (
				<DefinitionItem key={item.id} item={item} index={index + 1} />
			))}
		</ul>
	);
};
