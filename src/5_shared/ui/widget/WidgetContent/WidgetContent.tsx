import { ReactNode } from 'react';
import styles from './WidgetContent.module.scss';

type TWidgetContent = {
	children: ReactNode;
};

export const WidgetContent = ({ children }: TWidgetContent) => {
	return <div className={styles.main}>{children}</div>;
};
