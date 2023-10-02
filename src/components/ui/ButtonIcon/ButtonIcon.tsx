import cx from 'classnames';
import styles from './ButtonIcon.module.scss';

type ColorTheme = 'light' | 'dark';

interface Props {
	children: React.ReactNode;
	colorTheme?: ColorTheme;
	className?: string;
	title?: string;
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
	type = 'button',
	disabled = false,
	onClick,
}: Props) => {
	return (
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
