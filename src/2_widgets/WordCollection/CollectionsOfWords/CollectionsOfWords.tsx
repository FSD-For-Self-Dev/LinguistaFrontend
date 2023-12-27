import { useTranslation } from 'react-i18next';
import { SectionTitle, CustomLink } from '@ui/index';
import SvgIconCollections from '@assets/icons/icon_collections.svg?react';
import ListCardCollection from '../ListCardCollection';
import styles from './CollectionsOfWords.module.scss';

const CollectionsOfWords = () => {
  const { t } = useTranslation('word-profile');
  return (
    <div className={styles.collection}>
      <div className={styles.header}>
        <SectionTitle theme='bold' className={styles.title}>
          <SvgIconCollections />
          {t('collections')}
        </SectionTitle>
        <CustomLink href='#' target='_blank' apperance='button'>
          {t('allCollections')}&nbsp;
          <span className={styles.count}>15</span>
        </CustomLink>
      </div>
      <ListCardCollection />
    </div>
  );
};

export default CollectionsOfWords;
