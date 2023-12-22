import { Carousel } from '@ui/index';
import CardNote from '../CardNote';
import styles from './NoteCollection.module.scss';

const NoteCollection = () => {
  return (
    <div className={styles.notebook}>
      <Carousel
        arrows
        slides={1}
        className={styles.carousel}
        sliderClass={styles.slider}
        buttonClass={styles.arrows}
      >
        <CardNote />
        <CardNote />
      </Carousel>
    </div>
  );
};

export default NoteCollection;
