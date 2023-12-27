import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Select from '@radix-ui/react-select';
import { LANGUAGES } from '@shared/lib/constants';

import SvgIconLang from '@shared/assets/icons/icon_globus.svg?react';
import styles from './LanguageSwitcher.module.scss';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation([]);
  const [language, setLanguage] = useState(i18n.language);

  const changeLangHandler: (value: string) => void = (newLang) => {
    if (newLang === language) return;

    setLanguage(newLang);
    i18n.changeLanguage(newLang).catch(() => {});
    console.log('change lang');
  };

  return (
    <div className={styles.lang}>
      <Select.Root onValueChange={changeLangHandler} value={language}>
        <Select.Trigger className={styles.trigger}>
          <Select.Icon className={styles.icon}>
            <SvgIconLang />
          </Select.Icon>
          <Select.Value>{language}</Select.Value>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={styles.content}
            position='popper'
            sideOffset={5}
          >
            <Select.Viewport className={styles.viewport}>
              {LANGUAGES.map((lang, idx) => (
                <Select.Item
                  className={styles.item}
                  key={`langItem${idx}`}
                  value={lang}
                >
                  <Select.ItemText>{lang}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow width={25} height={10} className={styles.arrow} />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
