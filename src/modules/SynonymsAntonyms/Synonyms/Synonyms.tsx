import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@ui/SectionTitle';
import SvgSynonyms from '@assets/icons/icon_synonyms.svg?react';
import styles from './Synonyms.module.scss';
import SynonymsList from '../SynonymsList/SynonymsList';
import CustomLink from '@/components/ui/CustomLink';

export default function Synonyms() {
	const { t } = useTranslation('word-profile');
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<SectionTitle theme="bold">
					<SvgSynonyms />
					{t('synonyms')}
				</SectionTitle>
				<CustomLink apperance="button" href="#" target="_self">
					{t('allSynonyms')} 5
				</CustomLink>
			</div>
			<SynonymsList />
		</section>
	);
}
