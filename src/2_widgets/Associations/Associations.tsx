import { useTranslation } from 'react-i18next';
import AssociationsList from './AssociationsList';
import { SectionTitle, CustomLink } from '@ui/index';
import SvgIconAssociations from '@assets/icons/icon_associations.svg?react';
import styles from './Associations.module.scss';

import { dataAssociation } from './mocks';

const Associations = () => {
	const { t } = useTranslation('word-profile');
	const count = dataAssociation.length;
	return (
		<section className={styles.content}>
			<div className={styles.header}>
				<SectionTitle theme="bold">
					<SvgIconAssociations />
					{t('associations')}
				</SectionTitle>
				<CustomLink href="#" target="_blank" apperance="button">
					{t('allAssociations')}&nbsp;
					<span className={styles.count}>{count}</span>
				</CustomLink>
			</div>
			<AssociationsList />
		</section>
	);
};

export default Associations;
