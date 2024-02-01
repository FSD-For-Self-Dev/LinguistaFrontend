import { useTranslation } from 'react-i18next';
import { CopyText, ShadowBlock } from '@shared/ui';
import SVGIconLink from '@shared/assets/icons/actions/link.svg?react';
import SVGIconArrow from '@shared/assets/icons/arrows/expand-filled.svg?react';
import styles from './Examples.module.scss';

type TExamples = {
	list: string[];
};

export const Examples = ({ list }: TExamples) => {
	const { t } = useTranslation('definition-page');

	return (
		<ShadowBlock addClass={styles.marginTop}>
			<p className={styles.header}>
				<SVGIconArrow />
				<span className={styles.title}>
					<SVGIconLink /> {t('relatedExamples')}
				</span>
			</p>
			<ul className={styles.list}>
				{list.map((item) => (
					<li key={crypto.randomUUID()} className={styles.item}>
						<span>{item}</span>
						<CopyText text={item} />
					</li>
				))}
			</ul>
		</ShadowBlock>
	);
};
