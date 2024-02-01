import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './ShadowBlock.module.scss';

type TShadowBlock = {
	children: ReactNode;
	bgColor?: 'light' | 'dark';
	withPadding?: boolean;
	addClass?: string;
};

export const ShadowBlock = ({
	children,
	bgColor = 'light',
	withPadding = true,
	addClass,
}: TShadowBlock) => {
	return (
		<div
			className={cn(styles.container, styles[bgColor], { [styles.padding]: withPadding }, addClass)}
		>
			{children}
		</div>
	);
};
