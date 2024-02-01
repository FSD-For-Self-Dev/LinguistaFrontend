import cx from 'classnames';
import { CardContainer, Carousel, Popularity } from '@ui/index';
import styles from './SynonymAntonymCard.module.scss';

interface Props {
	type?: 'synonym' | 'antonym';
}

export default function SynonymAntonymCard({ type = 'synonym' }: Props) {
	return (
		<CardContainer className={cx(styles.container, type === 'antonym' && styles.container_antonym)}>
			<span className={styles.word}>Study</span>
			<Carousel
				className={styles.carousel}
				buttonClass={type === 'antonym' ? styles.arrows : ''}
				arrows
			>
				<span className={styles.translation}>Изучать</span>
				<span className={styles.translation}>Изучать</span>
			</Carousel>
			<span className={cx(styles.note, type === 'antonym' && styles.note_antonym)}>
				Заметка для синонима
			</span>
			{type === 'synonym' && <Popularity popularity="high" />}
		</CardContainer>
	);
}
