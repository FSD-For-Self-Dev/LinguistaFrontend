import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import cx from 'classnames';
import styles from './ButtonIcon.module.scss';

type ColorTheme = 'light' | 'dark';

interface Props {
	children: React.ReactNode;
	colorTheme?: ColorTheme;
	className?: string;
	title?: string;
	type?: 'submit' | 'reset' | 'button';
	trigger?: 'dropdown';
	disabled?: boolean;
	active?: boolean;
	onClick?: () => void;
	withBorder?: boolean;
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
	withBorder = false,
}: Props) => {
	return trigger === 'dropdown' ? (
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
			className={cx(
				styles.button,
				styles[`button_${colorTheme}`],
				{ [styles.withBorder]: withBorder },
				className
			)}
			onClick={onClick}
			type={type}
			disabled={disabled}
			title={title}
		>
			{children}
		</button>
	);
};
