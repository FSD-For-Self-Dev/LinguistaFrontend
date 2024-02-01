import { Link } from 'react-router-dom';
import styles from './ShadowBlockFooter.module.scss';

type TShadowBlockFooter = {
	title: string;
	link: string;
};

export const ShadowBlockFooter = ({ title, link }: TShadowBlockFooter) => {
	return (
		<div className={styles.footer}>
			<Link to={link} className={styles.link}>
				{title}
			</Link>
		</div>
	);
};
