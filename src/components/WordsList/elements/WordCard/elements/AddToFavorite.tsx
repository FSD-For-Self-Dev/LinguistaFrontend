import { useState } from 'react';
import SvgAddToFavorite from '@assets/icons/add_to_favorite.svg?react';
import styles from '../WordCard.module.scss';

interface Props {
	isFavorite?: boolean;
	id: string;
}

export const AddToFavorite = ({ isFavorite = false, id }: Props) => {
	const [isActive, setIsActive] = useState(isFavorite);

	const toggleClick = () => {
		setIsActive((current) => !current);
		console.log(`${id} add to favorite!`);
	};

	return (
		<button
			className="btn-img"
			onClick={toggleClick}
			title={isActive ? 'Удалить из Избранного' : 'Добавить в избранное'}
		>
			<SvgAddToFavorite
				className={isActive ? styles.svgFavorite : styles.svgAddToFavorite}
			/>
		</button>
	);
};
