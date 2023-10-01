import styles from './Footer.module.scss';
// import { Link } from 'react-router-dom';

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
			{/* <Link to={link.href}>{link.title}</Link> */}
			<a href={link.href} className={styles.link}>
				{link.title}
			</a>
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
