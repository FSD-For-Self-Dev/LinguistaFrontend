import { ReactNode } from 'react';
import styles from './ShadowBlockContent.module.scss';

type TWidgetContent = {
	children: ReactNode;
};

export const ShadowBlockContent = ({ children }: TWidgetContent) => {
	return <div className={styles.main}>{children}</div>;
};
