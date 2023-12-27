import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './CustomLink.module.scss';

interface Props {
  apperance?: 'regular' | 'underline' | 'button';
  href: string;
  onClick?: () => void;
  children: ReactNode;
  target: HTMLAttributeAnchorTarget;
  className?: string;
}

export const CustomLink = ({
  apperance = 'regular',
  href,
  onClick,
  children,
  target,
  className,
}: Props) => {
  return (
    <Link
      to={href}
      target={target}
      className={cx(styles.link, styles[`link_${apperance}`], className)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
