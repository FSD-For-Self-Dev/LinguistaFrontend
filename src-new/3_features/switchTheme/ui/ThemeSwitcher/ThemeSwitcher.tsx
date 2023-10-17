import { setTheme, themeSelector } from '../../../../4_entities/theme';
import { useAppDispatch, useAppSelector } from '../../../../5_shared/model';
// Иконки солнца нет поставил круг. НУЖНО ЗАМЕНИТЬ
import SvgIconSun from '../../../../5_shared/assets/icons/icon_not_active.svg?react';
import SvgIconMoon from '../../../../5_shared/assets/icons/icon_moon.svg?react';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
	const { theme } = useAppSelector(themeSelector);
	const dispatch = useAppDispatch();

	const setDarkTheme = () => {
		dispatch(setTheme('dark'));
	};

	const setLightTheme = () => {
		dispatch(setTheme('light'));
	};

	return (
		// <div className={styles.switcher} onClick={() => setDarkTheme(!darkTheme)}>
		<>
			{theme === 'dark' ? (
				<SvgIconSun className={styles.sun} onClick={() => setLightTheme()} />
			) : (
				<SvgIconMoon className={styles.moon} onClick={() => setDarkTheme()} />
			)}
		</>
		// </div>
	);
};
