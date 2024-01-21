import { Link } from 'react-router-dom';
import styles from './WidgetFooter.module.scss';

type TWidgetFooter = {
	title: string;
	link: string;
};

export const WidgetFooter = ({ title, link }: TWidgetFooter) => {
	return (
		<div className={styles.footer}>
			<Link to={link} className={styles.link}>
				{title}
			</Link>
		</div>
	);
};
