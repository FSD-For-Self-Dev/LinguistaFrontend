import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Word } from '@entities/words';
import { WordStatus } from '@entities/word/ui';
import { WordSubMenu } from '@ui/index';
import { Carousel, Badge, AddToFavorite, CopyText } from '@shared/ui';
import styles from './WordLayout.module.scss';

interface Props {
	item: Word;
	size?: 'mini' | 'big';
}

export const WordLayout = ({ item, size = 'big' }: Props) => {
	const { text, favorite, translations, activity, tags, types, collections, slug } = item;

	return (
		<div
			className={cx(styles.card, collections && size === 'big' && styles['withBg'], styles[size])}
		>
			{collections && size === 'big' && (
				<Carousel dots className={styles.image_slider} sliderClass={styles.image_slider}>
					{collections?.map((image) => (
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
				<WordStatus
					activity={activity}
					colorTheme={collections && size === 'big' ? 'light' : 'dark'}
					size={size}
				/>

				<span className={styles.cardActions}>
					<AddToFavorite
						colorTheme={collections && size === 'big' ? 'light' : 'dark'}
						isFavorite={favorite}
						id={text}
					/>
					<WordSubMenu colorTheme={collections && size === 'big' ? 'light' : 'dark'} />
				</span>
			</div>
			<div className={cx(styles.cardBody, styles[size])}>
				<p className={styles.type}>
					{types?.map((type, index) => (types.length - 1 === index ? type : `${type}, `))}
				</p>
				<p className={styles.word}>
					<Link to={`/vocabulary/${slug}`} className={styles.wordText}>
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

			{translations && size === 'big' ? (
				<Carousel arrows className={styles.cardFooter} sliderClass={styles.slider}>
					{translations?.map((translation, index) => <span key={index}>{translation.text}</span>)}
				</Carousel>
			) : (
				<></>
			)}
		</div>
	);
};
