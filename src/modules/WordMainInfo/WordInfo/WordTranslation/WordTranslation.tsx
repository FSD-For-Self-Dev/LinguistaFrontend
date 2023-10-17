import { useTranslation } from 'react-i18next';
import { CardContainer } from '@ui/CardContainer';
import CustomLink from '@ui/CustomLink';
import { SectionTitle } from '@ui/SectionTitle';
import { CopyText } from '@ui/CopyText';
import { Carousel } from '@ui/Carousel/Carousel';
import SvgLang from '@assets/icons/wordProfile/language.svg?react';
import styles from './WordTranslation.module.scss';

interface Props {
	translations: Array<string>;
}

export default function WordTranslation({ translations }: Props) {
	const { t } = useTranslation('word-profile');
	return (
		<CardContainer className={styles.container}>
			<CustomLink href="#" target="_self" apperance="button" className={styles.button}>
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
