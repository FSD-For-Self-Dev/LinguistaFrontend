import cx from 'classnames';
import styles from './Button.module.scss';

type ButtonTheme = 'primary' | 'transparent' | 'secondary' | 'no-border';
type ButtonSize = 'large' | 'normal' | 'medium' | 'small' | 'micro' | 'tall';

interface Props {
	children: React.ReactNode;
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	active?: boolean;
	onClick?: () => void;
}

export const Button = ({
	children,
	className,
	theme = 'primary',
	size = 'normal',
	type = 'button',
	disabled = false,
	active,
	onClick,
}: Props) => {
	return (
		<button
			className={cx(
				styles[`${theme}`],
				styles[size],
				active && styles[`${theme}_active`],
				className
			)}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
