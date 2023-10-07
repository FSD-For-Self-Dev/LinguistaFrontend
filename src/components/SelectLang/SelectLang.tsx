import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Select from '@radix-ui/react-select';
import { LANGUAGES } from '@/utils/constants';

import SvgIconLang from '@assets/icons/icon_globus.svg?react';
import styles from './SelectLang.module.scss';

export const SelectLang = () => {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const changeLangHandler: (value: string) => void = useCallback(
		(newLang) => {
			if (newLang === language) return;

			setLanguage(newLang);
			i18n.changeLanguage(newLang);
		},
		[i18n, language]
	);

	return (
		<div className={styles.lang}>
			<Select.Root onValueChange={changeLangHandler} value={language} defaultOpen={true}>
				<Select.Trigger className={styles.trigger}>
					<Select.Icon className="SelectIcon">
						<SvgIconLang />
					</Select.Icon>
					<Select.Value>{language}</Select.Value>
				</Select.Trigger>

				<Select.Portal>
					<Select.Content className={styles.content} position={'popper'}>
						<Select.ScrollUpButton className="SelectScrollButton" />
						<Select.Viewport className={styles.viewport}>
							{LANGUAGES.map((lang, idx) => (
								<Select.Item className={styles.item} key={`langItem${idx}`} value={lang}>
									<Select.ItemText>{lang}</Select.ItemText>
									<Select.ItemIndicator className="SelectItemIndicator">
										{/* <CheckIcon /> */}
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.Viewport>
						<Select.ScrollDownButton />
						<Select.Arrow />
					</Select.Content>
				</Select.Portal>
			</Select.Root>

			{/* <ButtonIcon>
				<>
					<SvgIconLang />
					<select className={styles.selectLang} onChange={changeLangHandler} value={language}>
						{LANGUAGES.map((lang, idx) => (
							<option value={lang} key={`lang${idx}`}>
								{lang}
							</option>
						))}
					</select>
				</>
			</ButtonIcon> */}
		</div>
	);
};
