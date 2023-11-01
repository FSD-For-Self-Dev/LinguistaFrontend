import { CustomLink } from '../../5_shared/ui';
import { ABOUT_ROUTE, CONTACTS_ROUTE, POLICY_ROUTE, TERMS_ROUTE } from '@shared/lib/routes';
import styles from './FooterLayout.module.scss';

const links = [
	{
		title: 'О проекте',
		href: ABOUT_ROUTE,
	},
	{
		title: 'Контакты',
		href: CONTACTS_ROUTE,
	},
	{
		title: 'Политика конфиденциальности',
		href: POLICY_ROUTE,
	},
	{
		title: 'Условия пользования',
		href: TERMS_ROUTE,
	},
];

export default function FooterLayout() {
	const footerLinks = links.map((link, idx) => (
		<li key={idx}>
			<CustomLink apperance="underline" target="_blank" href={link.href} className={styles.link}>
				{link.title}
			</CustomLink>
		</li>
	));

	return (
		<footer>
			<ul className={styles.links}>
				<li className={styles.copyright}>© 2023 Linguista</li>
				{footerLinks}
			</ul>
		</footer>
	);
}
