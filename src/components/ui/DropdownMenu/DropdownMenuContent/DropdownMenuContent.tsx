import { ReactNode, useContext } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import DropdownMenuContext from '../DropdownMenuContext';

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
	const { closeMenu } = useContext(DropdownMenuContext);

	return (
		<RadixDropdownMenu.Portal>
			<RadixDropdownMenu.Content
				className={styles.content}
				side={side}
				sideOffset={sideOffset}
				onPointerLeave={closeMenu}
			>
				{children}
				{arrow ? (
					<RadixDropdownMenu.Arrow
						width={31}
						height={13}
						className={styles.arrow}
					/>
				) : (
					''
				)}
			</RadixDropdownMenu.Content>
		</RadixDropdownMenu.Portal>
	);
};
