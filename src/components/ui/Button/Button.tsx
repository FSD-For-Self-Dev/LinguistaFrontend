import cx from 'classnames';
import styles from './Button.module.scss';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type ButtonTheme = 'primary' | 'transparent' | 'secondary' | 'no-border';
type ButtonSize = 'normal' | 'tall';

interface Props {
	children: React.ReactNode;
	className?: string;
	theme?: ButtonTheme;
	size?: ButtonSize;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	active?: boolean;
	onClick?: () => void;
	trigger?: boolean;
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
	trigger,
}: Props) => {
	return trigger ? (
		<DropdownMenu.Trigger
			className={cx(
				styles.button,
				styles[`button_${theme}`],
				styles[`button_${size}`],
				active && styles[`button_${theme}_active`],
				className
			)}
			type={type}
			disabled={disabled}
		>
			{children}
		</DropdownMenu.Trigger>
	) : (
		<button
			className={cx(
				styles.button,
				styles[`button_${theme}`],
				styles[`button_${size}`],
				active && styles[`button_${theme}_active`],
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
