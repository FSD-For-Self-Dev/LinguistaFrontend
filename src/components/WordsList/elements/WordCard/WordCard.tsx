import { WordStatus, WordSubMenu } from '@ui/index';
import { AddToFavorite, CopyText } from './elements';
import { Badge } from '@ui/Badge';
import { IWordCard } from '@/shared/interfaces/IWordCard';
import styles from './WordCard.module.scss';

interface Props {
	item: IWordCard;
}

export const WordCard = ({ item }: Props) => {
	const { word, status, level, type, img, favorite } = item;

	return (
		<div
			className={img ? `${styles.card} ${styles.withBg}` : styles.card}
			style={img ? { backgroundImage: `url(/img/${img})` } : {}}
		>
			<div className={styles.cardHeader}>
				<WordStatus status={status} colorTheme={img ? 'light' : 'dark'} />

				<span className={styles.cardActions}>
					<AddToFavorite
						colorTheme={img ? 'light' : 'dark'}
						isFavorite={favorite}
						id={word}
					/>
					<WordSubMenu colorTheme={img ? 'light' : 'dark'} />
				</span>
			</div>
			<div className={styles.cardBody}>
				<p className={styles.type}>{type}</p>
				<p className={styles.word}>
					<span className={styles.wordText}>{word}</span>
					<CopyText text={word} />
				</p>
				<ul className={styles.levelWrapper} aria-label="Теги для слова">
					<li>
						<Badge>легкое</Badge>
					</li>
					<li>
						<Badge>{level}</Badge>
					</li>
				</ul>
			</div>
			<div className={styles.cardFooter}>Изучать</div>
		</div>
	);
};
