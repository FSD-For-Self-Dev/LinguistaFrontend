import { ButtonIcon } from '@shared/ui';
import SvgIconCopy from '../../assets/icons/icon_copy.svg?react';
import styles from './CopyText.module.scss';

interface Props {
  text: string;
}

const CopyText = ({ text }: Props) => {
  const copyClick = () => {
    navigator.clipboard.writeText(text).catch(() => {});
  };

  return (
    <ButtonIcon onClick={copyClick} title='Скопировать'>
      <SvgIconCopy className={styles.copyIcon} />
    </ButtonIcon>
  );
};

export default CopyText;
