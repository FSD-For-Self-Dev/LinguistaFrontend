import CustomLink from '../ui/CustomLink';
import {
	ABOUT_ROUTE,
	CONTACTS_ROUTE,
	POLICY_ROUTE,
	TERMS_ROUTE,
} from '@/router/routes';
import styles from './Footer.module.scss';

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

export default function Footer() {
	const footerLinks = links.map((link, idx) => (
		<li key={idx}>
			<CustomLink
				apperance="underline"
				target="_blank"
				href={link.href}
				className={styles.link}
			>
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
