import { useTranslation } from 'react-i18next';
import {
  CardContainer,
  CustomLink,
  SectionTitle,
  CopyText,
  Carousel,
} from '@ui/index';
import SvgLang from '@assets/icons/wordProfile/language.svg?react';
import styles from './WordTranslation.module.scss';

interface Props {
  translations: string[];
}

export default function WordTranslation({ translations }: Props) {
  const { t } = useTranslation('word-profile');
  return (
    <CardContainer className={styles.container}>
      <CustomLink
        href='#'
        target='_self'
        apperance='button'
        className={styles.button}
      >
        {t('allTranslations')} 4
      </CustomLink>
      <SectionTitle>
        <SvgLang />
        Русский
      </SectionTitle>
      <Carousel arrows dots className={styles.slider} dotsClass={styles.dots}>
        {translations.map((translation) => (
          <div className={styles.word} key={translation}>
            <p className={styles.wordText}>{translation}</p>
            <CopyText text={translation} />
          </div>
        ))}
      </Carousel>
    </CardContainer>
  );
}
