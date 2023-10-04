import CustomLink from '../ui/CustomLink';
import styles from './Footer.module.scss';

const links = [
	{
		title: 'О проекте',
		href: '/about',
	},
	{
		title: 'Контакты',
		href: '/contact',
	},
	{
		title: 'Политика конфиденциальности',
		href: '/privacy-policy',
	},
	{
		title: 'Условия пользования',
		href: '/terms-of-use',
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
