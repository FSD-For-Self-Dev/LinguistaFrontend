import WordTranslation from '@widgets/WordMainInfo/WordInfo/WordTranslation/WordTranslation';
import { Badge, Carousel } from '@ui/index';
import image1 from '@assets/mock-for-card.png';
import image2 from '@assets/mock-for-card-2.png';
import { Activity } from '@entities/words';
import WordInfoUser from './WordInfoUser';
import WordOriginal from './WordOriginal/WordOriginal';
import styles from './WordInfo.module.scss';

export interface IWord {
  img: string[];
  word: string;
  status: Activity;
  level: string;
  type: string;
  favorite: boolean;
  translate: string[];
}

const info: IWord = {
  img: [image1, image2, image1, image2],
  word: 'Jump in at the deep end',
  status: 'ACTIVE',
  level: 'A1',
  type: 'глагол',
  favorite: true,
  translate: [
    'Прыгнуть в гущу событий',
    'Прыгнуть в гущу событий',
    'Прыгнуть в гущу событий',
  ],
};

export default function WordInfo() {
  return (
    <section className={styles.wrapper}>
      {info.img && (
        <Carousel
          fade
          dots
          autoplay
          className={styles.slider}
          dotsClass={styles.dots}
        >
          {info.img.map((image) => (
            <div className={styles.images} key={image}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${image})` }}
              />
              <img
                src={image}
                className={styles.image}
                alt='Ассоциативное изображение'
              />
              <div
                className={styles.image}
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </Carousel>
      )}

      <WordInfoUser />

      <WordOriginal info={info} />

      <ul className={styles.tags}>
        <li>
          <span className={styles.tag}>{info.type}</span>
        </li>
        <li>
          <Badge className={styles.tag}>легкое</Badge>
        </li>
        <li>
          <Badge className={styles.tag}>{info.level}</Badge>
        </li>
      </ul>
      {info.translate && <WordTranslation translations={info.translate} />}
    </section>
  );
}
