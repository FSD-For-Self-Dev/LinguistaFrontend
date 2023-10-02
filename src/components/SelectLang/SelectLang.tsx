import { useState } from 'react';
import styles from './SelectLang.module.scss';
import SvgIconLang from '@assets/icons/icon_globus.svg?react';
import { ButtonIcon } from '../ui/ButtonIcon';

const SelectLang = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [language, changeLanguage] = useState('RU');

	return (
		<div className={styles.lang}>
			<ButtonIcon>
				<SvgIconLang />
			</ButtonIcon>
			<select
				className={styles.selectLang}
				onChange={(evt) => changeLanguage(evt.target.value)}
			>
				<option value="ru">ru</option>
				<option value="eng">eng</option>
			</select>
		</div>
	);
};

export default SelectLang;
