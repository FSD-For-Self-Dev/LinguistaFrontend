import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './CustomLink.module.scss';

interface Props {
	apperance?: 'regular' | 'underline' | 'button';
	href: string;
	onClick?: () => void;
	children: React.ReactNode;
	target: React.HTMLAttributeAnchorTarget;
	className?: string;
}

function CustomLink({ apperance = 'regular', href, onClick, children, target, className }: Props) {
	return (
		<Link
			to={href}
			target={target}
			className={cx(styles.link, styles[`link_${apperance}`], className)}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}

export default CustomLink;
