import styles from './WordsList.module.scss';
import { WordCard } from './WordCard';
import { data } from '@/utils/mocks';
import SvgIconHistory from '@assets/icons/icon_history.svg?react';
import SvgIconView from '@assets/icons/icon_view.svg?react';
import { Button } from '../ui/Button';

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
