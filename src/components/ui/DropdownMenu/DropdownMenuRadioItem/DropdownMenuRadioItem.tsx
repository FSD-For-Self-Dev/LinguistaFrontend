import { ReactNode } from 'react';
import cx from 'classnames';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import styles from './DropdownMenuRadioItem.module.scss';

type TProps = {
	children: ReactNode;
	value: string;
	textValue: string;
	className: string;
};

export const DropdownMenuRadioItem = ({ children, value, className }: TProps) => {
	return (
		<RadixDropdownMenu.RadioItem value={value} className={cx(styles.item, className)}>
			{children}
		</RadixDropdownMenu.RadioItem>
	);
};
