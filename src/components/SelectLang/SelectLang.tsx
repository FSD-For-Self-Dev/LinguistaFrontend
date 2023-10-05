import { ChangeEvent, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from '@ui/ButtonIcon';
import { LANGUAGES } from '@/utils/constants';

import SvgIconLang from '@assets/icons/icon_globus.svg?react';
import styles from './SelectLang.module.scss';

const SelectLang = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const changeLangHandler = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			const newLang = event.target.value;

			if (newLang === language) return;

			setLanguage(newLang);
			i18n.changeLanguage(newLang);
		},
		[i18n, language]
	);

	return (
		<div className={styles.lang}>
			<ButtonIcon>
				<>
					<SvgIconLang />
					<select
						className={styles.selectLang}
						onChange={changeLangHandler}
						defaultValue={language}
					>
						{LANGUAGES.map((lang, idx) => (
							<option value={lang} key={`lang${idx}`} selected={lang === language}>
								{lang}
							</option>
						))}
					</select>
				</>
			</ButtonIcon>
		</div>
	);
};

export default SelectLang;
