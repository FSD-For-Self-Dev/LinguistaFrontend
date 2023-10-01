import classNames from 'classnames/bind';

import styles from './Tag.module.scss';

const cx = classNames.bind(styles);

interface Props {
	children: React.ReactNode;
	color?: string;
}

export default function Tag({ children, color }: Props) {
	return (
		<div className={cx('tag', { dustyBlue: color === 'dustyBlue' })}>
			<p className={cx('text')}>{children}</p>
		</div>
	);
}
