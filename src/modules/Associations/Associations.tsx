import CustomLink from '@/components/ui/CustomLink';
import { SectionTitle } from '@/components/ui/SectionTitle';
import SvgIconAssociations from '@assets/icons/icon_associations.svg?react';
import styles from './Associations.module.scss';
import AssociationsList from './AssociationsList';
import { dataAssociation } from './mocks';

const Associations = () => {
	const count = dataAssociation.length;
	return (
		<section className={styles.content}>
			<div className={styles.header}>
				<SectionTitle theme="bold">
					<SvgIconAssociations />
					Ассоциации
				</SectionTitle>
				<CustomLink href="#" target="_blank" apperance="button">
					Все ассоциации&nbsp;
					<span className={styles.count}>{count}</span>
				</CustomLink>
			</div>
			<AssociationsList />
		</section>
	);
};

export default Associations;
