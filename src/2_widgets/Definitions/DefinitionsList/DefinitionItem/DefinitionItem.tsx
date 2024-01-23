import { CopyText, Popularity, ShadowBlock } from '@shared/ui';
import { TDefinition } from '@entities/word/model/types';
import styles from './DefinitionItem.module.scss';

type TProps = {
	item: TDefinition;
	index: number;
};

export const DefinitionItem = ({ item, index }: TProps) => {
	const { text, popularity } = item;

	return (
		<li className={styles.definition}>
			<ShadowBlock bgColor="dark" addClass={styles.inner}>
				<p className={styles.index}>{index}</p>
				<p className={styles.content}>
					{text}
					{popularity && <Popularity popularity={popularity} />}
				</p>
				<p className={styles.copy}>
					<CopyText text={text} />
				</p>
			</ShadowBlock>
		</li>
	);
};
