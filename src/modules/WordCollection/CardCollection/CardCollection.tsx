
import CustomLink from '@/components/ui/CustomLink';

import styles from './CardCollection.module.scss';

const CardCollection = () => {
	const items = ['Dunder method', 'Linter', 'Framework'];

	return (
		<CustomLink href="#" target="_blank">
			<div className={styles.card}>
				<div className={styles.header}>
					<h3>Базовые</h3>
					<span className={styles.label}>49</span>
				</div>
				<div className={styles.description}>
					{items.map((item, id) => (
						<p key={id}>{item}</p>
					))}
				</div>
			</div>
		</CustomLink>
	);
};

export default CardCollection;
