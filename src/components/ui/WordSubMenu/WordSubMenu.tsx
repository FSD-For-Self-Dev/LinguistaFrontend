import { useState } from 'react';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import SvgIconDots from '@assets/icons/icon_dots.svg?react';
import styles from './WordSubMenu.module.scss';
import { ButtonIcon } from '@ui/ButtonIcon';

type ColorTheme = 'light' | 'dark';

interface Props {
	colorTheme: ColorTheme;
}

export const WordSubMenu = ({ colorTheme }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	return (
		<DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
			<ButtonIcon trigger="dropdown" colorTheme={colorTheme}>
				<SvgIconDots />
			</ButtonIcon>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className={styles.DropdownMenuContent}
					side="right"
					sideOffset={15}
					onPointerLeave={closeMenu}
				>
					<DropdownMenu.Item
						className={`${styles.DropdownMenuItem} ${styles.item}`}
					>
						Тренировать
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className={`${styles.DropdownMenuItem} ${styles.item}`}
					>
						Добавить в коллекцию
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className={`${styles.DropdownMenuItem} ${styles.item}`}
					>
						Редактировать
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className={`${styles.DropdownMenuItem} ${styles.red}`}
					>
						Удалить
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className={`${styles.DropdownMenuItem} ${styles.small}`}
						disabled
					>
						Редактировано пользователем user Вчера 14.09 в 13:00
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
