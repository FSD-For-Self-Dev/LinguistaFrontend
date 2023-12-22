import * as RadixPopover from '@radix-ui/react-popover';
import { ReactNode } from 'react';
import cx from 'classnames';
import styles from './PopoverTrigger.module.scss';

type TPopoverTriggerProps = {
  children: ReactNode;
  className?: string;
};

export const PopoverTrigger = ({
  children,
  className,
}: TPopoverTriggerProps) => {
  return (
    <RadixPopover.Trigger className={cx(styles.btn, className)}>
      {children}
    </RadixPopover.Trigger>
  );
};
