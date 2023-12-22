import cn from 'classnames';
import styles from './CardContainer.module.scss';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
}

export const CardContainer = ({ children, className }: Props) => {
	return <article className={cn(styles.container, className)}>{children}</article>;
};
