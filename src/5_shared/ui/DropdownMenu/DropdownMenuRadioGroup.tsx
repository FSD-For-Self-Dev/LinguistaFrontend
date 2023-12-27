import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

interface TProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}

const DropdownMenuRadioGroup = ({ children, ...props }: TProps) => {
  return (
    <RadixDropdownMenu.RadioGroup {...props}>
      {children}
    </RadixDropdownMenu.RadioGroup>
  );
};

export default DropdownMenuRadioGroup;
