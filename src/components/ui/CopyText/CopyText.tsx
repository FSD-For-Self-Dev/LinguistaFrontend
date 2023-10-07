import { ButtonIcon } from '@ui/ButtonIcon';
import SvgIconCopy from '@assets/icons/icon_copy.svg?react';
import styles from './CopyText.module.scss';

interface Props {
	text: string;
}

export const CopyText = ({ text }: Props) => {
	const copyClick = () => navigator.clipboard.writeText(text);

	return (
		<ButtonIcon onClick={copyClick} title="Скопировать">
			<SvgIconCopy className={styles.copyIcon} />
		</ButtonIcon>
	);
};
