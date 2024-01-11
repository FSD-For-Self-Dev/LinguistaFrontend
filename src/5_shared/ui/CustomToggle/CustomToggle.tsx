import cx from 'classnames';
import { ChangeEvent } from 'react';

import styles from './CustomToggle.module.scss';

interface CustomToggleProps {
	name: string;
	value?: string;
	id?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	inputClassName?: string;
	labelClassName?: string;
	labelText?: string;
	isDisabled?: boolean;
	isChecked?: boolean;
	isPositionRight?: boolean;
}

export const CustomToggle = ({
	name,
	value,
	id,
	onChange,
	inputClassName,
	labelClassName,
	labelText,
	isDisabled,
	isChecked,
	isPositionRight,
}: CustomToggleProps) => {
	return (
		<label
			className={cx(styles.toggle, labelClassName, isPositionRight && styles['toggle--right'])}
		>
			<input
				type="checkbox"
				name={name}
				value={value}
				id={id}
				className={cx(styles['visually-hidden'], inputClassName)}
				onChange={onChange}
				disabled={isDisabled}
				checked={isChecked}
			/>

			{isPositionRight ? (
				<>
					<span className={styles['toggle__label']}>{labelText}</span>
					<span className={cx(styles['toggle__icon'], styles['toggle__icon--right'])}></span>
				</>
			) : (
				<>
					<span className={styles['toggle__icon']}></span>
					<span className={styles['toggle__label']}>{labelText}</span>
				</>
			)}
		</label>
	);
};
