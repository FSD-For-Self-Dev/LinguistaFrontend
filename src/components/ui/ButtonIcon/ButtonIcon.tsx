import cx from 'classnames';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './ButtonIcon.module.scss';

type ColorTheme = 'light' | 'dark';

interface Props {
	children: React.ReactNode;
	colorTheme?: ColorTheme;
	className?: string;
	title?: string;
	trigger?: boolean;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	active?: boolean;
	onClick?: () => void;
}

export const ButtonIcon = ({
	children,
	colorTheme = 'dark',
	className,
	title,
	trigger,
	type = 'button',
	disabled = false,
	onClick,
}: Props) => {
	return trigger ? (
		<DropdownMenu.Trigger
			className={cx(styles.button, styles[`button_${colorTheme}`], className)}
			onClick={onClick}
			type={type}
			disabled={disabled}
			title={title}
		>
			{children}
		</DropdownMenu.Trigger>
	) : (
		<button
			className={cx(styles.button, styles[`button_${colorTheme}`], className)}
			onClick={onClick}
			type={type}
			disabled={disabled}
			title={title}
		>
			{children}
		</button>
	);
};
