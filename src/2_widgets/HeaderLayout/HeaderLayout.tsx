import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AddBtnWithMenu } from '@features/add/ui/AddBtnWithMenu';
import { SortBtnWithMenu } from '@features/sortWords/ui/SortBtnWithMenu';
import { FilterBtnWithPopover } from '@features/filteringWords/ui/FilterBtnWithPopover';

import { MAIN_ROUTE } from '@shared/lib/routes';
import { ThemeSwitcher } from '@features/switchTheme/index.';
import { LanguageSwitcher } from '@features/changeLanguage';
import { Input, CustomLink, ButtonIcon } from '@ui/index';

import SvgIconLogo from '@assets/icons/logo.svg?react';
import SvgIconUserCabinet from '@assets/icons/icon_user_cabinet.svg?react';
import SvgIconNotification from '@assets/icons/icon_notification.svg?react';

import styles from './HeaderLayout.module.scss';

const HeaderLayout = () => {
  const [searchText, changeSearchText] = useState('');
  const { t } = useTranslation('header');

  return (
    <header>
      <CustomLink
        href='/'
        target='_self'
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
          target='_self'
          className={styles.logoText}
          onClick={() => console.log('click')}
        >
          {t('projectName')} <span>{t('projectSlogan')}</span>
        </CustomLink>
        <div className={styles.searching}>
          <div className={styles.inputBlock}>
            <Input
              type='text'
              placeholder={t('searchPlaceholder')}
              className={styles.searchInput}
              onChange={(evt: ChangeEvent<HTMLInputElement>) =>
                changeSearchText(evt.target.value)
              }
              value={searchText}
            />
            <button
              type='submit'
              aria-label='Search'
              className={styles.searchBtn}
            />
          </div>

          <FilterBtnWithPopover />

          <SortBtnWithMenu />
        </div>

        <AddBtnWithMenu />

        <div className={styles.rightPanel}>
          <div className={styles.userInterface}>
            <ThemeSwitcher />
            {/* TODO вынести в отдельный компонент с модальным окном */}
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

export default HeaderLayout;
