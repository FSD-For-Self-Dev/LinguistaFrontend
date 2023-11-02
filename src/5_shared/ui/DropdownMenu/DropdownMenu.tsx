import { ReactNode, useState } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import DropdownMenuContext from './DropdownMenuContext';

type TProps = {
	children: ReactNode;
	modal?: boolean;
};

export const DropdownMenu = ({ children, modal = true }: TProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<DropdownMenuContext.Provider value={{ closeMenu }}>
			<RadixDropdownMenu.Root open={isOpen} onOpenChange={setIsOpen} modal={modal}>
				{children}
			</RadixDropdownMenu.Root>
		</DropdownMenuContext.Provider>
	);
};
