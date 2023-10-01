import { useState } from 'react';

import { Button } from '@ui/Button';
import iconSearch from '@assets/icons/icon_search.svg';
import iconGlobus from '@assets/icons/icon_globus.svg';
import iconMoon from '@assets/icons/icon_moon.svg';
import iconNotification from '@assets/icons/icon_notification.svg';
import iconUserCabinet from '@assets/icons/icon_user_cabinet.svg';
import iconFilter from '@assets/icons/icon_filter.svg';
import iconTags from '@assets/icons/icon_tags.svg';
import logo from '@assets/icons/logo.svg';
import style from './Header.module.scss';

const Header = () => {
	const [searchText, changeSearchText] = useState('');
	//const [language, changeLanguage] = useState('RU');
	return (
		<header>
			<a href="#" className={style.logoBlock}>
				<img src={logo} alt="Логотип" />
				<span className={style.logoText}>
					Linguista <span>Control & Repeat</span>
				</span>
			</a>
			<div className={style.searching}>
				<div className={style.searchBlock}>
					<input
						type="text"
						name=""
						id=""
						placeholder="Найти слово или фразу.."
						className={style.searchInput}
						onChange={(evt) => changeSearchText(evt.target.value)}
						value={searchText}
					/>
					<img src={iconSearch} alt="" className={style.searchIcon} />
				</div>
				<div className={style.filterBLock}>
					<img className={style.filter} src={iconFilter} />
				</div>
				<div className={style.sortingBlock}>
					<img className={style.sorting} src={iconTags} />
				</div>
				<Button>+&nbsp;Добавить</Button>
			</div>
			<div className={style.rightPanel}>
				<div className={style.userInterface}>
					<img className={style.themeSelect} src={iconMoon} alt="search" />
					<img className={style.notification} src={iconNotification} alt="" />
					<img
						className={style.userCabinet}
						src={iconUserCabinet}
						alt="cabinet"
					/>
				</div>
				<div className={style.lang}>
					<img src={iconGlobus} alt="Иконка языка" />
					<select
						name=""
						id=""
						className={style.selectLang}
						//	onChange={(evt) => changeLanguage(evt.target.value)}
					>
						<option value="ru">ru</option>
						<option value="eng">eng</option>
					</select>
				</div>
			</div>
		</header>
	);
};

export default Header;
