import { SectionTitle } from '../../SectionTitle/SectionTitle';
import SVGPlus from '@assets/icons/actions/plus.svg?react';
import SVGLearn from '@assets/icons/actions/hat.svg?react';
import styles from './WidgetHeader.module.scss';
import { ButtonIcon } from '../..';

type TWidgetHeader = {
	title: string;
	count: string;
};

export const WidgetHeader = ({ title, count }: TWidgetHeader) => {
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
