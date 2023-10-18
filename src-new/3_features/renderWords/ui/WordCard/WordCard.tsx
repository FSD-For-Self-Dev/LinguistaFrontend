import { Link } from 'react-router-dom';
import { VOCAB_WORD_ROUTE } from '../../../../5_shared/lib/routes';
import { WordSubMenu } from '../WordSubMenu/WordSubMenu';
import { WordStatus } from '../WordStatus/WordStatus';
import { Word } from '../../../../4_entities/words';
import { Carousel, Badge, AddToFavorite, CopyText } from '../../../../5_shared/ui';
import styles from './WordCard.module.scss';

interface Props {
	item: Word;
}

export const WordCard = ({ item }: Props) => {
	const { text, favorite, translations, activity, tags, types } = item;

	return (
		<div className={styles.card}>
			{/* {img && (
				<Carousel dots className={styles.image_slider} sliderClass={styles.image_slider}>
					{img?.map((image) => (
						<img
							key={image}
							className={styles.image}
							src={image}
							style={{ backgroundImage: `url(${image})` }}
						/>
					))}
				</Carousel>
			)} */}

			<div className={styles.cardHeader}>
				<WordStatus activity={activity} colorTheme={'dark'} />

				<span className={styles.cardActions}>
					<AddToFavorite colorTheme={'dark'} isFavorite={favorite} id={text} />
					<WordSubMenu colorTheme={'dark'} />
				</span>
			</div>
			<div className={styles.cardBody}>
				<p className={styles.type}>{types?.map((type) => `${type}, `)}</p>
				<p className={styles.word}>
					<Link to={VOCAB_WORD_ROUTE} className={styles.wordText}>
						{text}
					</Link>
					<CopyText text={text} />
				</p>
				<ul className={styles.levelWrapper} aria-label="Теги для слова">
					{tags?.map((tag, index) => (
						<li key={index}>
							<Badge>{tag}</Badge>
						</li>
					))}
				</ul>
			</div>

			{translations ? (
				<Carousel arrows className={styles.cardFooter} sliderClass={styles.slider}>
					{translations?.map((translation, index) => <span key={index}>{translation.text}</span>)}
				</Carousel>
			) : (
				<div />
			)}
		</div>
	);
};
