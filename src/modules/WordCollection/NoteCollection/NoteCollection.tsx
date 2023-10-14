import { Carousel } from '@/components/ui/Carousel/Carousel';
import styles from './NoteCollection.module.scss';
import CardNote from '../CardNote';

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
