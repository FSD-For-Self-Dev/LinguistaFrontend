import { ReactNode } from 'react';
import styles from './WidgetContainer.module.scss';

type TWidgetContainer = {
	children: ReactNode;
};

export const WidgetContainer = ({ children }: TWidgetContainer) => {
	return <section className={styles.container}>{children}</section>;
};
