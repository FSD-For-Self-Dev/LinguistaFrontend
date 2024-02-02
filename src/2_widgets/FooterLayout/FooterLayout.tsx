import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import SocialsList from './SocialsList/SocialsList';
import { CustomLink } from '../../5_shared/ui';
import { Input } from '../../5_shared/ui';

import SvgIconLogo from '@assets/icons/logo.svg?react';

import {
	MAIN_ROUTE,
	ABOUT_ROUTE,
	CONTACTS_ROUTE,
	POLICY_ROUTE,
	TERMS_ROUTE,
	FEEDBACK_ROUTE,
	DPA_ROUTE,
} from '@shared/lib/routes';
import styles from './FooterLayout.module.scss';

export default function FooterLayout() {
	const [inputText, setInputText] = useState('');
	const { t } = useTranslation('header');

	const leftLinks = [
		{
			title: 'О платформе',
			href: ABOUT_ROUTE,
		},
		{
			title: 'Контакты',
			href: CONTACTS_ROUTE,
		},
		{
			title: 'Отзывы',
			href: FEEDBACK_ROUTE,
		},
	];

	const rightLinks = [
		{
			title: 'Правила и условия',
			href: TERMS_ROUTE,
		},
		{
			title: 'Политика конфиденциальности',
			href: POLICY_ROUTE,
		},
		{
			title: 'Согласие на обработку персональных данных',
			href: DPA_ROUTE,
		},
	];

	const footerLeftLinks = leftLinks.map((link, index) => (
		<li key={index}>
			<CustomLink apperance="underline" target="_blank" href={link.href} className={styles.link}>
				{link.title}
			</CustomLink>
		</li>
	));

	const footerRightLinks = rightLinks.map((link, index) => (
		<li key={index}>
			<CustomLink apperance="underline" target="_blank" href={link.href} className={styles.link}>
				{link.title}
			</CustomLink>
		</li>
	));

	return (
		<footer className={styles.footer}>
			<div className={styles.logoBlock}>
				<CustomLink
					href={MAIN_ROUTE}
					target="_self"
					className={styles.logoPicture}
					onClick={() => console.log('click')}
				>
					<div className={styles.logoImg}>
						<SvgIconLogo className={styles.svg} />
					</div>
				</CustomLink>
				<CustomLink
					href={MAIN_ROUTE}
					target="_self"
					className={styles.logoText}
					onClick={() => console.log('click')}
				>
					<span className={styles.logoName}>{t('projectName')}</span>
					<span className={styles.logoSlogan}>{t('projectSlogan')}</span>
				</CustomLink>
			</div>

			<ul className={styles.nav}>
				<li>
					<ul className={styles.links}>{footerLeftLinks}</ul>
				</li>
				<li>
					<ul className={styles.links}>{footerRightLinks}</ul>
				</li>
				<li>
					<form className={styles.form}>
						<label className={styles.label}>Нашли ошибку? – Напишите нам!</label>
						<div className={styles.inputGroup}>
							<Input
								className={styles.input}
								type="text"
								placeholder="Сообщить об ошибке"
								value={inputText}
								onChange={(evt) => setInputText(evt.target.value)}
							></Input>
							<button className={styles.submitBtn} type="submit">
								Отправить
							</button>
						</div>
					</form>
					<SocialsList />
				</li>
			</ul>
			<p className={styles.copyright}>© 2023 Linguista. Все права защищены.</p>
		</footer>
	);
}
