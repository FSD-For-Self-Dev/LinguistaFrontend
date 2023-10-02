import cx from 'classnames';
import styles from './Badge.module.scss';

type BadgeType = 'tag' | 'number';

interface Props {
	children: React.ReactNode;
	className?: string;
	type?: BadgeType;
}

export const Badge = ({ children, className, type = 'tag' }: Props) => {
	return (
		<div className={cx(styles.badge, styles[`badge_${type}`], className)}>
			{children}
		</div>
	);
};
