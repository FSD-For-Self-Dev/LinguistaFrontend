import { CardContainer } from '@/5_shared/ui';
import styles from './EmptyCard.module.scss';

type TProps = {
	message: string;
};

export const EmptyCard = ({ message }: TProps) => {
	return <CardContainer className={styles.container}>{message}</CardContainer>;
};
