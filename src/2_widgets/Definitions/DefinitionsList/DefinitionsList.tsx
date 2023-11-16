import { TDefinition } from '@/4_entities/word/model/types';
import { DefinitionItem } from './item';
import styles from './DefinitionsList.module.scss';

type TProps = {
	items: TDefinition[];
};

export const DefinitionsList = ({ items }: TProps) => {
	return (
		<div className={styles.list}>
			{items.map((item) => (
				<DefinitionItem key={item.id} item={item} />
			))}
		</div>
	);
};
