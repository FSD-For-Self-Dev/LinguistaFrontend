import { SectionTitle, ButtonIcon } from '@shared/ui';
import SVGPlus from '@assets/icons/actions/plus.svg?react';
import SVGLearn from '@assets/icons/actions/hat.svg?react';
import styles from './ShadowBlockHeader.module.scss';

type TWidgetHeader = {
	title: string;
	count: string;
};

export const ShadowBlockHeader = ({ title, count }: TWidgetHeader) => {
	return (
		<div className={styles.header}>
			<SectionTitle theme="bold">
				{title} <span className={styles.total}>{count}</span>
			</SectionTitle>
			<div className={styles.actions}>
				<ButtonIcon withBorder={true}>
					<SVGPlus />
				</ButtonIcon>
				<ButtonIcon withBorder={true}>
					<SVGLearn />
				</ButtonIcon>
			</div>
		</div>
	);
};
