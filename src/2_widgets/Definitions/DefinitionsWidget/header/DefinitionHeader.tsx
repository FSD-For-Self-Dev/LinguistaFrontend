import { useTranslation } from 'react-i18next';
import { CustomLink, SectionTitle } from '@shared/ui';
import SvgIconDefinition from '@shared/assets/icons/icon_definition.svg?react';
import styles from './DefinitionHeader.module.scss';

type TProps = {
	total: string;
	linkToDefinitionsPage: string;
};

export const DefinitionHeader = ({ total, linkToDefinitionsPage }: TProps) => {
	const { t } = useTranslation('word-profile');

	return (
		<div className={styles.header}>
			<SectionTitle theme="bold">
				<SvgIconDefinition />
				{t('definitions')}
			</SectionTitle>
			<CustomLink href={linkToDefinitionsPage} target="_blank" apperance="button">
				{t('allDefinitions')}&nbsp;
				<span className={styles.count}>{total}</span>
			</CustomLink>
		</div>
	);
};
