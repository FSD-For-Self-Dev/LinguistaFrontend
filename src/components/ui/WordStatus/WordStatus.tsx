import SvgStatusActive from '@assets/icons/status_active.svg?react';
import SvgStatusNotActive from '@assets/icons/icon_not_active.svg?react';
import SvgIconQuestion from '@assets/icons/icon_question.svg?react';
import styles from './WordStatus.module.scss';

export const WordStatus = ({ status = 'Активное', colorTheme = 'dark' }) => {
	return (
		<span className={`${styles.status} ${styles[colorTheme]}`}>
			{status === 'Активное' ? (
				<SvgStatusActive />
			) : (
				<SvgStatusNotActive color="#B3C3FD" />
			)}
			{status}
			<SvgIconQuestion />
		</span>
	);
};
