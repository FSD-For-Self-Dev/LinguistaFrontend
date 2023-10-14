import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MAIN_ROUTE } from '@/router/routes';
import { Button } from '@ui/Button';
import { ButtonIcon } from '@ui/ButtonIcon';
import { LanguageSwitcher } from './LanguageSwitcher';
import Input from '@ui/Input';
import CustomLink from '@ui/CustomLink';
import ThemeSwitcher from './ThemeSwitcher';

import iconTags from '@assets/icons/icon_tags.svg';
import iconFilter from '@assets/icons/icon_filter.svg';
import SvgIconLogo from '@assets/icons/logo.svg?react';
import SvgIconNotification from '@assets/icons/icon_notification.svg?react';
import SvgIconUserCabinet from '@assets/icons/icon_user_cabinet.svg?react';

import styles from './Header.module.scss';

const Header = () => {
	const [searchText, changeSearchText] = useState('');
	const { t } = useTranslation('header');

	return (
		<header>
			<CustomLink
				href="/"
				target="_self"
				className={styles.logoBlock}
				onClick={() => console.log('click')}
			>
				<div className={styles.logoImg}>
					<SvgIconLogo className={styles.icon} />
				</div>
			</CustomLink>
			<div className={styles.contetnt}>
				<CustomLink
					href={MAIN_ROUTE}
					target="_self"
					className={styles.logoText}
					onClick={() => console.log('click')}
				>
					{t('projectName')} <span>{t('projectSlogan')}</span>
				</CustomLink>
				<div className={styles.searching}>
					<div className={styles.inputBlock}>
						<Input
							type="text"
							placeholder={t('searchPlaceholder')}
							className={styles.searchInput}
							onChange={(evt) => changeSearchText(evt.target.value)}
							value={searchText}
						/>
						<button type="submit" className={styles.searchBtn}></button>
					</div>

					<div className={styles.filterBLock}>
						<img className={styles.filter} src={iconFilter} />
					</div>

					<div className={styles.sortingBlock}>
						<img className={styles.sorting} src={iconTags} />
					</div>
				</div>

				{/* TODO вынести в отдельный кабинет с модальным окном */}
				<Button className={styles.button} onClick={() => console.log('click')}>
					{t('add')}
				</Button>

				<div className={styles.rightPanel}>
					<div className={styles.userInterface}>
						<ThemeSwitcher />
						{/* TODO вынести в отдельный компонент с модальным окном*/}
						<ButtonIcon>
							<SvgIconNotification />
						</ButtonIcon>

						{/* TODO вынести в отдельный компонент - с модальным окном */}
						<ButtonIcon>
							<SvgIconUserCabinet />
						</ButtonIcon>
					</div>

					<LanguageSwitcher />
				</div>
			</div>
		</header>
	);
};

export default Header;
