import styles from './DangerZoneWords.module.scss';
// import Triangle from './tooltips/Triangle';
import Fire from './tooltips/Fire';
import { Link } from 'react-router-dom';
import { VOCAB_WORD_ROUTE } from '@/router/routes';
import { WordSubMenu } from '@ui/index';
import { CopyText } from '@ui/CopyText';
import { AddToFavorite } from '@ui/AddToFavorite';
import { Badge } from '@ui/Badge';
import { IWordCard } from '@/shared/interfaces/IWordCard';
import SvgIconQuestion from '@assets/icons/icon_question.svg?react';
interface Props {
	item: IWordCard;
}

function DangerZoneWords({ item }: Props) {
	const { word, img, level, type, favorite } = item;
	return (
		<div className={styles.cardBody}>
			{/* // <div className={`${styles.cardBody} ${isLast ? '' : styles.notLast}`}> */}
			<div className={styles.cardHeader}>
				<div className={styles.icons_container}>
					<Fire />
					<SvgIconQuestion />
				</div>
				<div className={styles.cardActions}>
					<AddToFavorite colorTheme={img ? 'light' : 'dark'} isFavorite={favorite} id={word} />
					<WordSubMenu colorTheme={img ? 'light' : 'dark'} />
				</div>
			</div>
			<p className={styles.type}>{type}</p>
			<p className={styles.word}>
				<Link to={VOCAB_WORD_ROUTE} className={styles.wordText}>
					{word}
				</Link>
				<CopyText text={word} />
			</p>
			<ul className={styles.levelWrapper} aria-label="Теги для слова">
				<li>
					<Badge>Легкое</Badge>
				</li>
				<li>
					<Badge>{level}</Badge>
				</li>
			</ul>
		</div>
	);
}

export default DangerZoneWords;
