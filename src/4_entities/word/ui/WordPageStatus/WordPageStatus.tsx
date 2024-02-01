import { ReactElement, ReactNode } from 'react';
import { SectionTitle, ShadowBlock } from '@shared/ui';
import styles from './WordPageStatus.module.scss';

type TWordPageStatus = {
	title: string;
	icon: ReactElement;
	children: ReactNode | ReactNode[];
};

export const WordPageStatus = ({ title, icon, children }: TWordPageStatus) => {
	return (
		<ShadowBlock addClass={styles.header}>
			<SectionTitle theme="bold">
				{icon} {title}
			</SectionTitle>
			<div className={styles.actions}>{children}</div>
		</ShadowBlock>
	);
};
