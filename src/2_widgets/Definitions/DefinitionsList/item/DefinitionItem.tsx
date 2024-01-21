import { CopyText, Popularity } from '@shared/ui';
import { TDefinition } from '@entities/word/model/types';
import styles from './DefinitionItem.module.scss';

type TProps = {
	item: TDefinition;
	index: number;
};

export const DefinitionItem = ({ item, index }: TProps) => {
	const { text, popularity } = item;

	return (
		<li className={styles.item}>
			<p className={styles.index}>{index}</p>
			<div className={styles.definition}>
				{text}
				{popularity && <Popularity popularity={popularity} />}
			</div>
			<p className={styles.copy}>
				<CopyText text={text} />
			</p>
		</li>
	);
};
