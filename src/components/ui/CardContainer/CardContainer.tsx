import styles from './CardContainer.module.scss';

interface Props {
	children: string;
}

export const CardContainer = ({ children }: Props) => {
	return <article className={styles.container}>{children}</article>;
};
