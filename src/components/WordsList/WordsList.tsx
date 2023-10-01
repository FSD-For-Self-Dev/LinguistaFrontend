import { IWordCard } from '@/shared/interfaces/IWordCard';
import styles from './WordsList.module.scss';
import { WordCard } from './elements/WordCard';
import SvgIconHistory from '@assets/icons/icon_history.svg?react';
import SvgIconView from '@assets/icons/icon_view.svg?react';

const data: Array<IWordCard> = [
	{
		word: 'Learn',
		status: 'Активное',
		level: 'C1',
		type: 'глагол',
		favorite: true,
		img: 'bg1.png',
	},
	{
		word: 'apple',
		status: 'Активное',
		level: 'A1',
		type: 'существительное',
		img: 'bg2.jpg',
	},
	{
		word: 'I like freedom',
		status: 'Активное',
		level: 'A1',
		type: 'существительное',
		img: 'bg3.jpg',
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
					<button className={`${styles.btn} ${styles.btnBlue}`}>
						Добавить в&nbsp;словарь
					</button>
					<button className={`${styles.btn} ${styles.btnWhite}`}>
						Добавить в&nbsp;коллекцию
					</button>
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
