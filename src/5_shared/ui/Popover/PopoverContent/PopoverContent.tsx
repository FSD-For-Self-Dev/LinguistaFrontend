import { ReactNode, forwardRef } from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import styles from './PopoverContent.module.scss';

interface TProps {
  children: ReactNode;
}

const PopoverContent = forwardRef<HTMLDivElement, TProps>(
  ({ children, ...props }, forwardedRef) => (
    <RadixPopover.Portal>
      <RadixPopover.Content
        className={styles.content}
        sideOffset={5}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <RadixPopover.Close className={styles.closeBtn} aria-label='Close'>
          x
        </RadixPopover.Close>
        <RadixPopover.Arrow width={31} height={13} className={styles.arrow} />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  ),
);
PopoverContent.displayName = 'Forward';

export default PopoverContent;
