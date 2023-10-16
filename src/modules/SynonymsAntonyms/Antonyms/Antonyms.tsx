import { useTranslation } from 'react-i18next';
import AntonymsList from '../AntonymsList';
import CustomLink from '@ui/CustomLink';
import { SectionTitle } from '@ui/SectionTitle';
import SvgAntonyms from '@assets/icons/icon_antonyms.svg?react';
import styles from './Antonyms.module.scss';

export default function Antonyms() {
	const { t } = useTranslation('word-profile');
	return (
		<section className={styles.container}>
			<div className={styles.header}>
				<SectionTitle theme="bold">
					<SvgAntonyms />
					{t('antonyms')}
				</SectionTitle>
				<CustomLink apperance="button" href="#" target="_self">
					{t('allAntonyms')} 5
				</CustomLink>
			</div>
			<AntonymsList />
		</section>
	);
}
