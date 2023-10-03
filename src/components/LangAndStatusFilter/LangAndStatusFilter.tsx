import { Button } from '@ui/Button';
import styles from './LangAndStatusFilter.module.scss';
import iconLanguages from '@assets/icons/icon_languages.svg';
import IconDumbbell from '@assets/icons/icon_dumbbell.svg?react';
import iconNotActive from '@assets/icons/icon_not_active.svg';
import iconActive from '@assets/icons/icon_active.svg';
import iconCompleted from '@assets/icons/icon_completed.svg';

const LangAndStatusFilter = () => {
	return (
		<div className={styles.container}>
			<div className={styles.currentLanguageBlock}>
				<div className={styles.currentLanguage}>
					<img src={iconLanguages} alt="" />
					<span>Английский</span>
				</div>
				<div className={styles.wordNumber}>
					<span>335 слов и фраз</span>
				</div>
			</div>
			<div className={styles.filtersBlock}>
				<div className={styles.notActive}>
					<img src={iconNotActive} alt="" />
					<span>Неактивные</span>
				</div>
				<div className={styles.active}>
					<img src={iconActive} alt="" />
					<span>Активные</span>
				</div>
				<div className={styles.completed}>
					<img src={iconCompleted} alt="" />
					<span>Усвоенные</span>
				</div>
			</div>
			<div className={styles.trainingAdviceBlock}>
				<span className={styles.left}>
					Вы активно используете <b>146 слов и фраз</b>
					<br />
					Так держать!
				</span>
				<div className={styles.splitter}></div>
				<span className={styles.right}>
					Чтобы поддерживать эти слова активными,
					<br />
					тренируйте их в упражнениях
				</span>
				<Button className={styles.button} icon size="tall">
					<IconDumbbell className={styles.icon} />
					Тренировать
				</Button>
			</div>
		</div>
	);
};

export default LangAndStatusFilter;
