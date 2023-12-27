import cx from 'classnames';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './DropdownMenuItem.module.scss';

interface TDropdownMenuItemProps {
  children: string | string[];
  action?: ((event: Event) => void) | undefined;
  disabled?: boolean;
  className?: string;
}

const DropdownMenuItem = ({
  children,
  action = undefined,
  disabled = false,
  className = '',
}: TDropdownMenuItemProps) => {
  return (
    <RadixDropdownMenu.Item
      disabled={disabled}
      className={cx(styles.item, styles[className])}
      onSelect={action}
    >
      {children}
    </RadixDropdownMenu.Item>
  );
};

export default DropdownMenuItem;
