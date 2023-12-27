import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import cx from 'classnames';
import styles from './DropdownMenuButton.module.scss';

interface TDropdownMenuButtonProps {
  children: ReactNode;
  className?: string;
}

const DropdownMenuButton = ({
  children,
  className,
}: TDropdownMenuButtonProps) => {
  return (
    <RadixDropdownMenu.Trigger className={cx(styles.btn, className)}>
      {children}
    </RadixDropdownMenu.Trigger>
  );
};

export default DropdownMenuButton;
