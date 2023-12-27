import { ReactNode } from 'react';
import cn from 'classnames';
import styles from './CardContainer.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
}

const CardContainer = ({ children, className }: Props) => {
  return (
    <article className={cn(styles.container, className)}>{children}</article>
  );
};

export default CardContainer;
