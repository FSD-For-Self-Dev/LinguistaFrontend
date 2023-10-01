import classNames from 'classnames/bind';

import styles from './WordInfo.module.scss';
import WordInfoUser from '@components/WordInfo/WordInfoUser';
import WordInfoCard from '@components/WordInfo/WordInfoCard';
import Tag from '@components/WordInfo/Tag';

const cx = classNames.bind(styles);

export default function WordInfo() {
	return (
		<section className={cx('wrapper')}>
			<WordInfoUser />

			<div className={cx('wrapperCard')}>
				<WordInfoCard type="default" />
			</div>

			<ul className={cx('tags')}>
				<li className={cx('tagsItem')}>
					<Tag>глагол</Tag>
				</li>
				<li className={cx('tagsItem')}>
					<Tag color={'dustyBlue'}>легкое</Tag>
				</li>
				<li className={cx('tagsItem')}>
					<Tag color={'dustyBlue'}>a1</Tag>
				</li>
			</ul>

			<WordInfoCard type="translations" />
		</section>
	);
}
