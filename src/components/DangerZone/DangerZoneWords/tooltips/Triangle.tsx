import { useState } from 'react';

import triangle from '@assets/icons/warning-triangle.svg';
import styles from './Tooltips.module.scss';

function Triangle() {
	const [showTooltip, setShowTooltip] = useState(false);

	const handleMouseEnter = () => {
		setShowTooltip(true);
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
	};

	return (
		<div
			className={styles.icon_container}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={triangle} alt="warning triangle" />
			{/* TODO счетчик дней неактивности */}
			{showTooltip && (
				<div className={styles.tooltip}>
					<span>Станет неактивным </span>{' '}
					<span>
						<b>
							через <br />2 дня
						</b>
					</span>
				</div>
			)}
		</div>
	);
}

export default Triangle;
