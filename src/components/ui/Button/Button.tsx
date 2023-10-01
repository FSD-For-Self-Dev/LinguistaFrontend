import cx from 'classnames';
import styles from './Button.module.scss';

type ButtonTheme = 'primary' | 'transparent' | 'secondary' | 'no-border';
type ButtonSize = 'normal' | 'tall';

interface Props {
	children: React.ReactNode;
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	icon?: boolean;
	onClick?: () => void;
}

export const Button = ({
	children,
	className,
	theme = 'primary',
	size = 'normal',
	type = 'button',
	disabled = false,

	onClick,
}: Props) => {
	return (
		<button
			className={cx(
				styles.button,
				styles[`button_${theme}`],
				styles[`button_${size}`],
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
