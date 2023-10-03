import { Link } from 'react-router-dom';

interface Props {
	href: string;
	onClick?: () => void;
	children: React.ReactNode;
	target: React.HTMLAttributeAnchorTarget;
	className?: string;
}

function CustomLink({ href, onClick, children, target, className }: Props) {
	return (
		<Link to={href} target={target} className={className} onClick={onClick}>
			{children}
		</Link>
	);
}

export default CustomLink;
