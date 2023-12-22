import { Button } from '@shared/ui';
import IconDumbbell from '../../../../5_shared/assets/icons/icon_dumbbell.svg?react';
import styles from './ActivityBanner.module.scss';

interface Props {
  status: string;
  advice: string;
  textButton: string;
}

export const ActivityBanner = ({ status, advice, textButton }: Props) => {
  return (
    <div className={styles.banner}>
      <span className={styles.left}>{status}</span>
      <div className={styles.splitter} />
      <span className={styles.right}>{advice}</span>
      <Button className={styles.button} size='tall'>
        <IconDumbbell className={styles.icon} />
        {textButton}
      </Button>
    </div>
  );
};
