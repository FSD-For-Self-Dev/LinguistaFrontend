import { ReactElement } from 'react';
import { Button, ShadowBlock, ShadowBlockContent } from '@shared/ui';
import styles from './EmptyCard.module.scss';

type TProps = {
	message: string;
	btnTitle?: string;
	icon?: ReactElement;
};

export const EmptyCard = ({ message, btnTitle, icon }: TProps) => {
	return (
		<ShadowBlock>
			<ShadowBlockContent>
				<div className={styles.container}>
					<p className={styles.message}>
						{icon} {message}
					</p>
					<Button>+&nbsp;{btnTitle}</Button>
				</div>
			</ShadowBlockContent>
		</ShadowBlock>
	);
};
