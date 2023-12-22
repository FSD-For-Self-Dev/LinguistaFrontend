import cx from 'classnames';
import styles from './SectionTitle.module.scss';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  theme?: 'regular' | 'bold';
  svg?: string;
}

export const SectionTitle = ({
  children,
  className,
  theme = 'regular',
}: Props) => {
  return (
    <h2 className={cx(styles.title, styles[`title_${theme}`], className)}>
      {children}
    </h2>
  );
};
