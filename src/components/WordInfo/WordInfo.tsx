import cx from 'classnames';
import WordInfoUser from '@components/WordInfo/WordInfoUser';
import WordInfoCard from '@components/WordInfo/WordInfoCard';
import { Badge } from '@ui/Badge';
import styles from './WordInfo.module.scss';

export default function WordInfo() {
	return (
		<section className={cx(styles.wrapper)}>
			<WordInfoUser />

			<WordInfoCard type="default" />

			<ul className={cx(styles.tags)}>
				<li className={cx(styles.tagsItem)}>
					<span>глагол</span>
				</li>
				<li className={cx(styles.tagsItem)}>
					<Badge>легкое</Badge>
				</li>
				<li className={cx(styles.tagsItem)}>
					<Badge>A1</Badge>
				</li>
			</ul>

			<WordInfoCard type="translations" />
		</section>
	);
}
