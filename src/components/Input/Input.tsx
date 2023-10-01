import { ChangeEvent } from 'react';

interface Props {
	type: string;
	name?: string;
	id?: string;
	placeholder: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	value: string;
	className?: string;
}

function Input({
	type,
	name,
	id,
	placeholder,
	onChange,
	value,
	className,
}: Props) {
	return (
		<input
			type={type}
			name={name}
			id={id}
			placeholder={placeholder}
			className={className}
			onChange={onChange}
			value={value}
		/>
	);
}
export default Input;
