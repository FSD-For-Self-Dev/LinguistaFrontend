import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Word } from '@entities/words';
import { AddToFavorite } from '@features/addToFavorite';
import { WordSubMenu, WordStatus } from '@ui/index';
import { Carousel, Badge, CopyText } from '@shared/ui';
import { nanoid } from '@reduxjs/toolkit';
import styles from './WordLayout.module.scss';

interface Props {
  item: Word;
  size?: 'mini' | 'big';
}

export default function WordLayout({ item, size = 'big' }: Props) {
  const {
    text,
    favorite,
    translations,
    activity,
    tags,
    types,
    collections,
    slug,
  } = item;

  return (
    <div
      className={cx(
        styles.card,
        collections && size === 'big' && styles.withBg,
        styles[size],
      )}
    >
      {collections && size === 'big' && (
        <Carousel
          dots
          className={styles.image_slider}
          sliderClass={styles.image_slider}
        >
          {collections?.map((image) => (
            <img
              key={image}
              className={styles.image}
              src={image}
              style={{ backgroundImage: `url(${image})` }}
              alt='card'
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
          <WordSubMenu
            colorTheme={collections && size === 'big' ? 'light' : 'dark'}
          />
        </span>
      </div>
      <div className={cx(styles.cardBody, styles[size])}>
        <p className={styles.type}>
          {types?.map((type, index) =>
            types.length - 1 === index ? type : `${type}, `,
          )}
        </p>
        <p className={styles.word}>
          <Link to={`/vocabulary/${slug}`} className={styles.wordText}>
            {text}
          </Link>
          <CopyText text={text} />
        </p>
        <ul className={styles.levelWrapper} aria-label='Теги для слова'>
          {tags?.map((tag) => (
            <li key={`levelWrapper_${nanoid()}`}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>

      {translations && size === 'big' ? (
        <Carousel
          arrows
          className={styles.cardFooter}
          sliderClass={styles.slider}
        >
          {translations?.map((translation) => (
            <span key={`translation_${nanoid()}`}>{translation.text}</span>
          ))}
        </Carousel>
      ) : (
        ''
      )}
    </div>
  );
}
