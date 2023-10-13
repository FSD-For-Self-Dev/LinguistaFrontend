import { ReactNode, useState } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import DropdownMenuContext from './DropdownMenuContext';

type TProps = {
	children: ReactNode;
};

export const DropdownMenu = ({ children }: TProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<DropdownMenuContext.Provider value={{ closeMenu }}>
			<RadixDropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
				{children}
			</RadixDropdownMenu.Root>
		</DropdownMenuContext.Provider>
	);
};
