import { Link } from 'react-router-dom';
import { VOCAB_WORD_ROUTE } from '@/router/routes';
import { WordStatus, WordSubMenu } from '@ui/index';
import { CopyText } from '@ui/CopyText';
import { AddToFavorite } from '@ui/AddToFavorite';
import { Badge } from '@ui/Badge';
import { IWordCard } from '@/shared/interfaces/IWordCard';
import { Carousel } from '@ui/Carousel/Carousel';
import styles from './WordCard.module.scss';

interface Props {
	item: IWordCard;
}

export const WordCard = ({ item }: Props) => {
	const { word, status, level, type, img, favorite, translate } = item;

	return (
		<div className={img ? `${styles.card} ${styles.withBg}` : styles.card}>
			{img && (
				<Carousel
					dots
					className={styles.image_slider}
					sliderClass={styles.image_slider}
				>
					{img?.map((image) => (
						<img
							key={image}
							className={styles.image}
							src={image}
							style={{ backgroundImage: `url(${image})` }}
						/>
					))}
				</Carousel>
			)}

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
					<Link to={VOCAB_WORD_ROUTE} className={styles.wordText}>
						{word}
					</Link>
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

			{translate ? (
				<Carousel
					arrows
					className={styles.cardFooter}
					sliderClass={styles.slider}
				>
					{translate?.map((translation) => (
						<span key={translation}>{translation}</span>
					))}
				</Carousel>
			) : (
				<div />
			)}
		</div>
	);
};
