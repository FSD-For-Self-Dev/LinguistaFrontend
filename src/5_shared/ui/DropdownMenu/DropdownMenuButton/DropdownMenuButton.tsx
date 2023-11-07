import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import cx from 'classnames';
import styles from './DropdownMenuButton.module.scss';

type TDropdownMenuButtonProps = {
	children: ReactNode;
	className?: string;
};

export const DropdownMenuButton = ({ children, className }: TDropdownMenuButtonProps) => {
	return (
		<RadixDropdownMenu.Trigger className={cx(styles.btn, className)}>
			{children}
		</RadixDropdownMenu.Trigger>
	);
};
