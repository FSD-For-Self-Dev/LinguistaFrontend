import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

type TDropdownMenuButtonProps = {
	children: ReactNode;
	className?: string;
};

export const DropdownMenuButton = ({ children, className }: TDropdownMenuButtonProps) => {
	console.log(className);
	return <RadixDropdownMenu.Trigger className={className}>{children}</RadixDropdownMenu.Trigger>;
};
