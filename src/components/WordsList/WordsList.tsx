import { IWordCard } from '@/shared/interfaces/IWordCard';
import styles from './WordsList.module.scss';
import { WordCard } from './elements/WordCard';
import image from '@assets/mock-for-card.png';
import SvgIconHistory from '@assets/icons/icon_history.svg?react';
import SvgIconView from '@assets/icons/icon_view.svg?react';
import { Button } from '../ui/Button';

const data: Array<IWordCard> = [
	{
		word: 'Learn',
		status: 'Активное',
		level: 'C1',
		type: 'глагол',
		favorite: true,
		img: [image, image, image, image, image],
		translate: ['понимать', 'осознать', 'узнать', 'уяснить'],
	},
	{
		word: 'apple',
		status: 'Активное',
		level: 'A1',
		type: 'существительное',
		img: [image],
		translate: ['яблоко'],
	},
	{
		word: 'I like freedom',
		status: 'Активное',
		level: 'A1',
		type: 'существительное',
		img: [image, image, image],
	},
	{
		word: "Don't worry, be happy",
		status: 'Неактивное',
		level: 'A2',
		type: 'глагол',
		favorite: true,
	},
	{ word: 'carrot', status: 'Неактивное', level: 'B1', type: 'прилагательное' },
	{ word: 'banana', status: 'Активное', level: 'C1', type: 'глагол' },
	{ word: 'carrot', status: 'Активное', level: 'B1', type: 'прилагательное' },
	{
		word: 'understand',
		status: 'Неактивное',
		level: 'B2',
		type: 'наречие',
		translate: ['понимать', 'осознать', 'узнать', 'уяснить'],
	},
];

export const WordsList = () => {
	const wordsList = data.map((wordItem, idx) => {
		return <WordCard item={wordItem} key={idx} />;
	});

	return (
		<section>
			<div className={styles.header}>
				<div className={styles.headerStats}>
					<span className={styles.subTitle}>146 слов и&nbsp;фраз</span>
				</div>
				<div className={styles.headerActions}>
					<Button className={styles.btn} size="tall">
						Добавить в&nbsp;словарь
					</Button>
					<Button className={styles.btn} theme="transparent" size="tall">
						Добавить в&nbsp;коллекцию
					</Button>
				</div>
				<div className={styles.headerLinks}>
					<button className="btn-img" title="Посмотреть историю">
						<SvgIconHistory title="Посмотреть историю" />
					</button>
					<button className="btn-img" title="Изменить вид">
						<SvgIconView title="Изменить вид" />
					</button>
				</div>
			</div>
			<div className={styles.list}>{wordsList}</div>
		</section>
	);
};
