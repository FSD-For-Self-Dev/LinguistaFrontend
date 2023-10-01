import * as React from 'react';
import styles from './SvgIconDots.module.scss';

export const SvgIconDots = ({ colorTheme = 'dark' }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none">
		<path
			className={styles[colorTheme]}
			d="M2.71 12.002a1.875 1.875 0 1 0 3.75 0 1.875 1.875 0 0 0-3.75 0ZM12.087 13.877a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75ZM19.59 13.878a1.875 1.875 0 1 1 0-3.75 1.875 1.875 0 0 1 0 3.75Z"
		/>
	</svg>
);
