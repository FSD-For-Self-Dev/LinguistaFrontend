import { useLocation } from 'react-router';
import cx from 'classnames';
import CustomLink from '@components/CustomLink';
import {
	ABOUT_ROUTE,
	COLLECT_ROUTE,
	EXERCISES_ROUTE,
	FAVOR_ROUTE,
	LANGS_ROUTE,
	VOCAB_ROUTE,
} from '@/utils/constants';
import SvgIconHome from '@assets/icons/icon_home.svg?react';
import SvgIconLanguages from '@assets/icons/icon_languages.svg?react';
import SvgIconDictionary from '@assets/icons/icon_dictionary.svg?react';
import SvgIconCollections from '@assets/icons/icon_collections.svg?react';
import SvgIconFavorite from '@assets/icons/icon_favorite.svg?react';
import SvgIconExercises from '@assets/icons/icon_exercises.svg?react';
import SvgIconInfo from '@assets/icons/icon_info.svg?react';
import styles from './Navbar.module.scss';

function Navbar() {
	const location = useLocation();
	const scrollToUp = (id: string) => {
		const element = document.getElementById(id);
		element && element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	};

	return (
		<aside className={styles.container}>
			<nav className={styles.navigation} id="navigation">
				<ul className={styles.list}>
					<li>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname === '/' && styles.link_active
							)}
							href="/"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconHome className={styles.icon} />
							<h2 className={styles.title}>Главная</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname === LANGS_ROUTE && styles.link_active
							)}
							href={LANGS_ROUTE}
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconLanguages className={styles.icon} />
							<h2 className={styles.title}>Языки</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname.startsWith(VOCAB_ROUTE) && styles.link_active
							)}
							href={VOCAB_ROUTE}
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconDictionary className={styles.icon} />
							<h2 className={styles.title}>Словарь</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname.startsWith(COLLECT_ROUTE) &&
									styles.link_active
							)}
							href={COLLECT_ROUTE}
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconCollections className={styles.icon} />
							<h2 className={styles.title}>Коллекции</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname.startsWith(FAVOR_ROUTE) && styles.link_active
							)}
							href={FAVOR_ROUTE}
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconFavorite className={styles.icon} />
							<h2 className={styles.title}>Избранное</h2>
						</CustomLink>
					</li>
					<hr className={styles.border}></hr>
					<li className={styles.exercises}>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname.startsWith(EXERCISES_ROUTE) &&
									styles.link_active
							)}
							href={EXERCISES_ROUTE}
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconExercises className={styles.icon} />
							<h2 className={styles.title}>Упражнения</h2>
						</CustomLink>
					</li>
					<hr className={styles.border}></hr>
					<li>
						<CustomLink
							className={cx(
								styles.link,
								location.pathname === ABOUT_ROUTE && styles.link_active
							)}
							href={ABOUT_ROUTE}
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconInfo className={`${styles.icon} ${styles.icon_circle}`} />
							<h2 className={styles.title}>О проекте</h2>
						</CustomLink>
					</li>
				</ul>
			</nav>
			<button
				className={styles.btn_up}
				type="button"
				onClick={() => scrollToUp('navigation')}
			></button>
		</aside>
	);
}

export default Navbar;
