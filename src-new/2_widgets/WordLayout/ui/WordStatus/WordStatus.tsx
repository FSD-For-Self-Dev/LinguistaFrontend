import SvgStatusActive from '@assets/icons/status_active.svg?react';
import SvgStatusNotActive from '@assets/icons/icon_not_active.svg?react';
import SvgIconQuestion from '@assets/icons/icon_question.svg?react';
import { Activity } from '../../../../4_entities/words';

import styles from './WordStatus.module.scss';

type Props = {
	activity?: Activity;
	colorTheme: 'dark' | 'light';
};

export const WordStatus = ({ activity = 'ACTIVE', colorTheme = 'light' }: Props) => {
	return (
		<span className={`${styles.status} ${styles[colorTheme]}`}>
			{activity === 'ACTIVE' ? <SvgStatusActive /> : <SvgStatusNotActive color="#B3C3FD" />}
			{activity === 'ACTIVE' && 'Активный'}
			{activity === 'INACTIVE' && 'Неактивный'}
			{activity === 'MASTERED' && 'Усвоен'}
			<SvgIconQuestion />
		</span>
	);
};
