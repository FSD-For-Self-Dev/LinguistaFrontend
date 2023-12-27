import { Activity } from '@entities/words';
import SvgStatusActive from '@shared/assets/icons/status_active.svg?react';
import SvgStatusNotActive from '@shared/assets/icons/icon_not_active.svg?react';
import SvgStatusCompleted from '@shared/assets/icons/icon_completed.svg?react';
import SvgIconQuestion from '@shared/assets/icons/icon_question.svg?react';
import styles from './WordStatus.module.scss';

interface Props {
  activity?: Activity;
  colorTheme: 'dark' | 'light';
  size?: 'mini' | 'big';
}

export default function WordStatus({
  activity = 'ACTIVE',
  colorTheme = 'light',
  size = 'big',
}: Props) {
  return (
    <span className={`${styles.status} ${styles[colorTheme]}`}>
      {activity === 'ACTIVE' && (
        <>
          <SvgStatusActive /> {size === 'big' && 'Активныи'}
        </>
      )}
      {activity === 'INACTIVE' && (
        <>
          <SvgStatusNotActive color='#B3C3FD' />{' '}
          {size === 'big' && 'Неактивный'}
        </>
      )}
      {activity === 'MASTERED' && (
        <>
          <SvgStatusCompleted /> {size === 'big' && 'Усвоен'}
        </>
      )}
      {size === 'big' && <SvgIconQuestion />}
    </span>
  );
}
