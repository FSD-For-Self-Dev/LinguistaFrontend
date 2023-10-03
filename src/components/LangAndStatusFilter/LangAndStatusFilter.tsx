import { Link, useLocation } from 'react-router-dom';
import cx from 'classnames';

import {
	VOCAB_ACTIVE_ROUTE,
	VOCAB_INACTIVE_ROUTE,
	VOCAB_LEARNED_ROUTE,
} from '@/router/routes';
import styles from './LangAndStatusFilter.module.scss';
import iconLanguages from '@assets/icons/icon_languages.svg';
import iconNotActive from '@assets/icons/icon_not_active.svg';
import iconActive from '@assets/icons/icon_active.svg';
import iconCompleted from '@assets/icons/icon_completed.svg';
import { ActivityBanner } from '../ActivityBanner';

const LangAndStatusFilter = () => {
	const location = useLocation();
	return (
		<div className={styles.container}>
			<div className={styles.currentLanguageBlock}>
				<div className={styles.currentLanguage}>
					<img src={iconLanguages} alt="" />
					<span>Английский</span>
				</div>
				<div className={styles.wordNumber}>
					<span>335 слов и фраз</span>
				</div>
			</div>
			<ul className={styles.filtersBlock}>
				<li>
					<Link
						to={VOCAB_INACTIVE_ROUTE}
						className={cx(
							styles.link,
							location.pathname === VOCAB_INACTIVE_ROUTE && styles.link_active
						)}
					>
						<img src={iconNotActive} alt="" />
						<span>Неактивные</span>
					</Link>
				</li>
				<li>
					<Link
						to={VOCAB_ACTIVE_ROUTE}
						className={cx(
							styles.link,
							location.pathname === VOCAB_ACTIVE_ROUTE && styles.link_active
						)}
					>
						<img src={iconActive} alt="" />
						<span>Активные</span>
					</Link>
				</li>
				<li>
					<Link
						to={VOCAB_LEARNED_ROUTE}
						className={cx(
							styles.link,
							location.pathname === VOCAB_LEARNED_ROUTE && styles.link_active
						)}
					>
						<img src={iconCompleted} alt="" />
						<span>Усвоенные</span>
					</Link>
				</li>
			</ul>
			{(location.pathname === VOCAB_ACTIVE_ROUTE ||
				location.pathname === VOCAB_INACTIVE_ROUTE ||
				location.pathname === VOCAB_LEARNED_ROUTE) && <ActivityBanner />}
		</div>
	);
};

export default LangAndStatusFilter;
