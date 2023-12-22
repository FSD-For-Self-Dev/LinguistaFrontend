import { useTranslation } from 'react-i18next';
import styles from './Notes.module.scss';
import SvgIconNotes from '@assets/icons/icon_notes.svg?react';
import { CustomLink, SectionTitle } from '@ui/index';
import NoteCollection from '../NoteCollection';

const Notes = () => {
  const { t } = useTranslation('word-profile');
  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <SectionTitle theme='bold' className={styles.title}>
          <SvgIconNotes />
          {t('notes')}
        </SectionTitle>
        <CustomLink href='#' target='_blank' apperance='button'>
          {t('allNotes')}&nbsp;
          <span className={styles.count}>15</span>
        </CustomLink>
      </div>
      <NoteCollection />
    </div>
  );
};

export default Notes;
