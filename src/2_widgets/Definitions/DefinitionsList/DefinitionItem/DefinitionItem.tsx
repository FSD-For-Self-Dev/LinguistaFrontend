import { Examples } from './elements/Examples';
import { TDefinition } from '@entities/word/model/types';
import { CopyText, Popularity, ShadowBlock } from '@shared/ui';
import styles from './DefinitionItem.module.scss';

type TProps = {
	item: TDefinition;
	index: number;
};

export const DefinitionItem = ({ item, index }: TProps) => {
	const { text, popularity, translation, examples } = item;

	return (
		<li className={styles.definition}>
			<ShadowBlock bgColor="dark">
				<div className={styles.inner}>
					<p className={styles.index}>{index}</p>
					<p className={styles.content}>
						{text}
						{popularity && <Popularity popularity={popularity} />}
					</p>
					<p className={styles.copy}>
						<CopyText text={text} />
					</p>
				</div>
				{translation && (
					<div className={styles.inner}>
						<p className={styles.translateTitle}>Перевод</p>
						<p className={styles.translate}>{translation}</p>
						<p className={styles.copy}>
							<CopyText text={text} />
						</p>
					</div>
				)}

				{examples && <Examples list={examples} />}
			</ShadowBlock>
		</li>
	);
};
