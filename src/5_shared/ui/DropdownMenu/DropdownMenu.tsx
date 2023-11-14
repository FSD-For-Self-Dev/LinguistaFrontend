import { ReactNode, useState } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

type TProps = {
	children: ReactNode;
};

export const DropdownMenu = ({ children }: TProps) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<RadixDropdownMenu.Root open={isOpen} onOpenChange={setIsOpen} modal={false}>
			{children}
		</RadixDropdownMenu.Root>
	);
};
