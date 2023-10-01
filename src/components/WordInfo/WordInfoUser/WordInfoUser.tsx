import classNames from 'classnames/bind';

import author from '@assets/icons/wordProfile/author.svg';
import styles from './WordInfoUser.module.scss';

const cx = classNames.bind(styles);

export default function WordInfoUser() {
	return (
		<div className={cx('user')}>
			<div className={cx('userInfo')}>
				<img className={cx('userIcon')} src={author} alt="Автор" />
				<p className={cx('name')}>Adnrew</p>

				<p className={cx('username')}>username</p>
			</div>

			<div className={cx('dateAdded')}>
				<p className={cx('added')}>Добавлено 1 августа 2023</p>
				<p className={cx('ago')}>месяц назад</p>
			</div>
		</div>
	);
}
