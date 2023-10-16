import WordInfoUser from '../WordInfo/WordInfoUser';
import WordOriginal from './WordOriginal';
import WordTranslation from './WordTranslation';
import { Badge } from '@ui/Badge';
import { Carousel } from '@/components/ui/Carousel/Carousel';
import { IWordCard } from '@shared/interfaces/IWordCard';
import image1 from '@assets/mock-for-card.png';
import image2 from '@assets/mock-for-card-2.png';
import styles from './WordInfo.module.scss';

const info: IWordCard = {
	img: [image1, image2, image1, image2],
	word: 'Jump in at the deep end',
	status: 'Активное',
	level: 'A1',
	type: 'глагол',
	favorite: true,
	translate: ['Прыгнуть в гущу событий', 'Прыгнуть в гущу событий', 'Прыгнуть в гущу событий'],
};

export default function WordInfo() {
	return (
		<section className={styles.wrapper}>
			{info.img && (
				<Carousel fade dots autoplay className={styles.slider} dotsClass={styles.dots}>
					{info.img.map((image) => (
						<div className={styles.images} key={image}>
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
							<img src={image} className={styles.image} alt="Ассоциативное изображение" />
							<div className={styles.image} style={{ backgroundImage: `url(${image})` }} />
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
