import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import styles from './DropdownMenuContent.module.scss';

type TProps = {
	children: ReactNode;
	side?: 'bottom' | 'top' | 'right' | 'left';
	sideOffset?: number;
	arrow?: boolean;
};

export const DropdownMenuContent = ({
	children,
	side = 'bottom',
	sideOffset = 10,
	arrow = true,
}: TProps) => {
	return (
		<RadixDropdownMenu.Portal>
			<RadixDropdownMenu.Content className={styles.content} side={side} sideOffset={sideOffset}>
				{children}
				{arrow ? <RadixDropdownMenu.Arrow width={31} height={13} className={styles.arrow} /> : ''}
			</RadixDropdownMenu.Content>
		</RadixDropdownMenu.Portal>
	);
};
