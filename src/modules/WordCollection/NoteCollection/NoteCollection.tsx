import { Carousel } from '@/components/ui/Carousel/Carousel';
import CardNote from '../CardNote';
import styles from './NoteCollection.module.scss';

const NoteCollection = () => {
	return (
		<div className={styles.notebook}>
			<span className={styles.date}>10 августа 2023</span>
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
