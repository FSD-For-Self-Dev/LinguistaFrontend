import { useState } from 'react';

import iconGlobus from '@assets/icons/icon_globus.svg';
import iconMoon from '@assets/icons/icon_moon.svg';
import iconNotification from '@assets/icons/icon_notification.svg';
import iconUserCabinet from '@assets/icons/icon_user_cabinet.svg';
import iconFilter from '@assets/icons/icon_filter.svg';
import iconTags from '@assets/icons/icon_tags.svg';
import SvgIconLogo from '@assets/icons/logo.svg?react';
import styles from './Header.module.scss';
import CustomLink from '../CustomLink';
import Input from '../Input';

const Header = () => {
	const [searchText, changeSearchText] = useState('');
	//const [language, changeLanguage] = useState('RU');
	return (
		<header>
			{/* <div className={styles.container}> */}
			<CustomLink
				href="#"
				target="_self"
				className={styles.logoBlock}
				onClick={() => console.log('click')}
			>
				<div className={styles.logoImg}>
					<SvgIconLogo className={styles.icon} />
				</div>
			</CustomLink>
			<div className={styles.contetnt}>
				<span className={styles.logoText}>
					Linguista <span>Control & Repeat</span>
				</span>

				<div className={styles.searching}>
					<div className={styles.inputBlock}>
						<Input
							type="text"
							placeholder="Найти слово или фразу.."
							className={styles.searchInput}
							onChange={(evt) => changeSearchText(evt.target.value)}
							value={searchText}
						/>
						<button type="button" className={styles.searchBtn}></button>
					</div>

					<div className={styles.filterBLock}>
						<img className={styles.filter} src={iconFilter} />
					</div>

					<div className={styles.sortingBlock}>
						<img className={styles.sorting} src={iconTags} />
					</div>

					<button className={`${styles.typeAdd} button button-blue`}>
						+ Добавить
					</button>
				</div>

				<div className={styles.rightPanel}>
					<div className={styles.userInterface}>
						<img className={styles.themeSelect} src={iconMoon} alt="search" />
						<img
							className={styles.notification}
							src={iconNotification}
							alt=""
						/>
						<img
							className={styles.userCabinet}
							src={iconUserCabinet}
							alt="cabinet"
						/>
					</div>
					<div className={styles.lang}>
						<img src={iconGlobus} alt="Иконка языка" />
						<select
							name=""
							id=""
							className={styles.selectLang}
							//	onChange={(evt) => changeLanguage(evt.target.value)}
						>
							<option value="ru">ru</option>
							<option value="eng">eng</option>
						</select>
					</div>
				</div>
			</div>
			{/* </div> */}
		</header>
	);
};

export default Header;
