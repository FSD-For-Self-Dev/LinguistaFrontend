import { IAssociationCard } from '@/shared/interfaces/IAssociationCard';
import styles from './CardAssociation.module.scss';

interface Props {
	item: IAssociationCard;
}

const CardAssociation = ({ item }: Props) => {
	const { img, quote, assonant } = item;

	return (
		<div
			className={img ? `${styles.card} ${styles.card_bg}` : styles.card}
			style={{ backgroundImage: `url(${img})` }}
		>
			{quote && (
				<div className={styles.card_quote}>
					<span>&quot;{quote}&quot;</span>
				</div>
			)}
			{assonant && (
				<div className={styles.card_assonant}>
					<span className={styles.assonant}>{assonant}</span>
				</div>
			)}
		</div>
	);
};

export default CardAssociation;
