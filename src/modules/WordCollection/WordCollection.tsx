import { SectionTitle } from '@/components/ui/SectionTitle';
import styles from './WordCollection.module.scss';
import SvgIconCollections from '@assets/icons/icon_collections.svg?react';
import SvgIconNotes from '@assets/icons/icon_notes.svg?react';
import CustomLink from '@/components/ui/CustomLink';
import ListCardCollection from './ListCardCollection';
// import { Carousel } from '@/components/ui/Carousel/Carousel';

const WordCollection = () => {
	const count = {
		collections: 10,
		notes: 15,
	};

	return (
		<section className={styles.content}>
			<div className={styles.collection}>
				<div className={styles.header}>
					<SectionTitle className={styles.title}>
						<SvgIconCollections />
						Коллекции с этим словом
					</SectionTitle>
					<CustomLink href="#" target="_blank" apperance="button">
						Все коллекции&nbsp;
						<span className={styles.count}>{count.collections}</span>
					</CustomLink>
				</div>
				<ListCardCollection />
			</div>
			<div className={styles.notes}>
				<div className={styles.header}>
					<SectionTitle className={styles.title}>
						<SvgIconNotes />
						Заметки
					</SectionTitle>
					<CustomLink href="#" target="_blank" apperance="button">
						Все заметки&nbsp;
						<span className={styles.count}>{count.notes}</span>
					</CustomLink>
				</div>
				<div className={styles.note}>
					<p>10 августа 2023</p>
					{/* <Carousel
						arrows
						slides={3} 
					className={styles.carousel}
					sliderClass={styles.slider}
					buttonClass={styles.arrows}
					>*/}
					<p>абра-кадабра</p>
					{/* <p>сяськи-масяськм</p>
						<p>Не используется в официальном стиле</p> */}
					{/* </Carousel> */}
				</div>
			</div>
		</section>
	);
};

export default WordCollection;
