import cx from 'classnames';
import { ChangeEvent } from 'react';

import styles from './CustomRadio.module.scss';

interface CustomRadioProps {
	name: string;
	value: string;
	id?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	inputClassName?: string;
	labelClassName?: string;
	labelText?: string;
	isDisabled?: boolean;
	isChecked?: boolean;
	isPositionRight?: boolean;
	isError?: boolean;
}

export const CustomRadio = ({
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
	isError,
}: CustomRadioProps) => {
	return (
		<label className={cx(styles.radio, labelClassName, isPositionRight && styles['radio--right'])}>
			<input
				type="radio"
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
					<span className={styles['radio__label']}>{labelText}</span>
					<span
						className={cx(
							styles['radio__icon'],
							styles['radio__icon--right'],
							isError && styles['radio__icon--error']
						)}
					></span>
				</>
			) : (
				<>
					<span
						className={cx(styles['radio__icon'], isError && styles['radio__icon--error'])}
					></span>
					<span className={styles['radio__label']}>{labelText}</span>
				</>
			)}
		</label>
	);
};
