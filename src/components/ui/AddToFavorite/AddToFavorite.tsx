import { useState } from 'react';
import { ButtonIcon } from '@ui/ButtonIcon';
import SvgAddToFavorite from '@assets/icons/add_to_favorite.svg?react';
import styles from './AddToFavorite.module.scss';

type ColorTheme = 'light' | 'dark';

interface Props {
	colorTheme?: ColorTheme;
	isFavorite?: boolean;
	id: string;
}

export const AddToFavorite = ({ isFavorite = false, colorTheme = 'dark', id }: Props) => {
	const [isActive, setIsActive] = useState(isFavorite);

	const toggleClick = () => {
		setIsActive((current) => !current);
		console.log(`${id} add to favorite!`);
	};

	return (
		<ButtonIcon
			onClick={toggleClick}
			colorTheme={colorTheme}
			title={isActive ? 'Удалить из Избранного' : 'Добавить в избранное'}
			className={isActive ? styles.favorite : ''}
		>
			<SvgAddToFavorite className={isActive ? styles.favorite : ''} />
		</ButtonIcon>
	);
};
