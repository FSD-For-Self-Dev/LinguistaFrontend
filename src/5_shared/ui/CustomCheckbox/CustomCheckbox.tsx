import cx from 'classnames';
import { ChangeEvent } from 'react';

import SvgIconTick from '@assets/icons/actions/tick.svg?react';

import styles from './CustomCheckbox.module.scss';

interface CustomCheckboxProps {
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
	isError?: boolean;
}

export const CustomCheckbox = ({
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
}: CustomCheckboxProps) => {
	return (
		<label
			className={cx(styles.checkbox, labelClassName, isPositionRight && styles['checkbox--right'])}
		>
			<input
				type="checkbox"
				value={value}
				name={name}
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
						className={cx(styles.icon, styles['icon--right'], isError && styles['icon--error'])}
					>
						<SvgIconTick />
					</span>
				</>
			) : (
				<>
					<span className={cx(styles.icon, isError && styles['icon--error'])}>
						<SvgIconTick />
					</span>
					<span className={styles.label}>{labelText}</span>
				</>
			)}
		</label>
	);
};
