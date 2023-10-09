// import { useEffect, useState } from "react";
import SvgIconMoon from '@assets/icons/icon_moon.svg?react';
import styles from './ThemeSwitcher.module.scss';

const ThemeSwitcher = () => {
	// Заготовочка под смену темы - раскомментировать и адаптировать, когда будет 2 темы
	// const [darkTheme, setDarkTheme] = useState(false);
	// const themeText = darkTheme ? "Light" : "Dark";
	// const ThemeIcon = darkTheme ? SunIcon : MoonIcon;

	// эффект следящий за изменением темы и устанавливающий соответвующий атрибут
	// body  в зависимости от состояния перемнной darkTheme
	// useEffect(() => {
	//     document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
	// }, [darkTheme]);

	return (
		// <div className={styles.switcher} onClick={() => setDarkTheme(!darkTheme)}>
		<SvgIconMoon className={styles.icon} />
		// </div>
	);
};

export default ThemeSwitcher;
