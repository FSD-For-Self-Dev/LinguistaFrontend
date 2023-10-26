import iconLanguages from '@assets/icons/icon_languages.svg';
import styles from './LanguageFilterLayout.module.scss';

export const LanguageFilterLayout = () => {
	return (
		<div className={styles.currentLanguageBlock}>
			<div className={styles.currentLanguage}>
				<img src={iconLanguages} alt="" />
				<span>Английский</span>
			</div>
			<div className={styles.wordNumber}>
				<span>335 слов и фраз</span>
			</div>
		</div>
	);
};
