import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

type TProps = {
	children: ReactNode;
	value: string;
	onValueChange: (value: string) => void;
};

export const DropdownMenuRadioGroup = ({ children, ...props }: TProps) => {
	return (
		<RadixDropdownMenu.RadioGroup {...props}>
			{children}
		</RadixDropdownMenu.RadioGroup>
	);
};
