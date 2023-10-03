import { useState } from 'react';
import styles from './SelectLang.module.scss';
import SvgIconLang from '@assets/icons/icon_globus.svg?react';
import { ButtonIcon } from '../ui/ButtonIcon';

const SelectLang = () => {
	const [language, changeLanguage] = useState('RU');

	return (
		<div className={styles.lang}>
			<ButtonIcon>
				<>
					<SvgIconLang />
					<select
						className={styles.selectLang}
						onChange={(evt) => changeLanguage(evt.target.value)}
						defaultValue={language}
					>
						<option value="RU">ru</option>
						<option value="ENG">eng</option>
					</select>
				</>
			</ButtonIcon>
		</div>
	);
};

export default SelectLang;
