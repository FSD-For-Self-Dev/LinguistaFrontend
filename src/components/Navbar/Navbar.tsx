import cx from 'classnames';
import CustomLink from '@components/CustomLink';
import { useTranslation } from 'react-i18next';

import SvgIconInfo from '@assets/icons/icon_info.svg?react';
import SvgIconHome from '@assets/icons/icon_home.svg?react';
import SvgIconFavorite from '@assets/icons/icon_favorite.svg?react';
import SvgIconExercises from '@assets/icons/icon_exercises.svg?react';
import SvgIconLanguages from '@assets/icons/icon_languages.svg?react';
import SvgIconDictionary from '@assets/icons/icon_dictionary.svg?react';
import SvgIconCollections from '@assets/icons/icon_collections.svg?react';
import styles from './Navbar.module.scss';
import { useCallback } from 'react';

function Navbar() {
	const { t } = useTranslation('navbar');

	const scrollToUp = useCallback((id: string) => {
		const element = document.getElementById(id);
		element && element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	}, []);

	return (
		<aside className={styles.container}>
			<nav className={styles.navigation} id="navigation">
				<ul className={styles.list}>
					<li>
						<CustomLink
							className={cx(styles.link)}
							href="/"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconHome className={styles.icon} />
							<h2 className={styles.title}>{t('home')}</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={styles.link}
							href="/languages"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconLanguages className={styles.icon} />
							<h2 className={styles.title}>{t('languages')}</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={styles.link}
							href="/vocabulary"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconDictionary className={styles.icon} />
							<h2 className={styles.title}>{t('vocabulary')}</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={styles.link}
							href="/collections"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconCollections className={styles.icon} />
							<h2 className={styles.title}>{t('collections')}</h2>
						</CustomLink>
					</li>
					<li>
						<CustomLink
							className={styles.link}
							href="/favorite"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconFavorite className={styles.icon} />
							<h2 className={styles.title}>{t('favorite')}</h2>
						</CustomLink>
					</li>
					<hr className={styles.border}></hr>
					<li className={styles.exercises}>
						<CustomLink
							className={styles.link}
							href="/exercises"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconExercises className={styles.icon} />
							<h2 className={styles.title}>{t('exercises')}</h2>
						</CustomLink>
					</li>
					<hr className={styles.border}></hr>
					<li>
						<CustomLink
							className={styles.link}
							href="/about-us"
							target="_self"
							onClick={() => console.log('click')}
						>
							<SvgIconInfo className={`${styles.icon} ${styles.icon_circle}`} />
							<h2 className={styles.title}>{t('about')}</h2>
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
