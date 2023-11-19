/* eslint-disable prettier/prettier */
import { useTranslation } from 'react-i18next';
import SvgWordForms from '@assets/icons/icon_word_forms.svg?react';
import styles from './WordForms.module.scss';
import { CustomLink, SectionTitle } from '@ui/index';
import WordFormsList from './WordFormsList';


export default function WordForms() {
    const { t } = useTranslation('word-profile');
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <SectionTitle theme="bold">
                    <SvgWordForms />
                    {t('forms')}
                </SectionTitle>
                <CustomLink apperance="button" href="#" target="_self">
                    {t('allForms')} 3
                </CustomLink>
            </div>
            <WordFormsList />

        </section>
    );
}
