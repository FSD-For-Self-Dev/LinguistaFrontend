interface Props {
	href: string;
	onClick?: () => void;
	children: React.ReactNode;
	target: React.HTMLAttributeAnchorTarget;
	className?: string;
}

function CustomLink({ href, onClick, children, target, className }: Props) {
	return (
		<a href={href} target={target} className={className} onClick={onClick}>
			{children}
		</a>
	);
}

export default CustomLink;
