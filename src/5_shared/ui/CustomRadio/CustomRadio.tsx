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
		<label
			className={cx(styles.radio, labelClassName, { [styles['radio--right']]: isPositionRight })}
		>
			<input
				type="radio"
				name={name}
				value={value}
				id={id}
				className={cx(styles.visuallyHidden, inputClassName)}
				onChange={onChange}
				disabled={isDisabled}
				checked={isChecked}
			/>

			{isPositionRight ? (
				<>
					<span className={styles.label}>{labelText}</span>
					<span
						className={cx(styles.icon, styles['icon--right'], { [styles['icon--error']]: isError })}
					></span>
				</>
			) : (
				<>
					<span className={cx(styles.icon, { [styles['icon--error']]: isError })}></span>
					<span className={styles.label}>{labelText}</span>
				</>
			)}
		</label>
	);
};
