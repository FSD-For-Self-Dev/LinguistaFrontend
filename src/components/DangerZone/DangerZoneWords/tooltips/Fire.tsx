import { useState } from 'react';
import styles from './Tooltips.module.scss';
import fire from '@assets/icons/fire-icon.svg';

function Fire() {
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
			<img src={fire} alt="fire icon" />
			{/* TODO счетчик дней неактивности */}
			{showTooltip && (
				<div className={styles.tooltip}>
					Статус активности:
					<br />
					<span>
						<b>Активное</b>
					</span>
				</div>
			)}
		</div>
	);
}

export default Fire;
