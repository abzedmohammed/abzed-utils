import { Select, Spin } from 'antd';
import { defaultInputStyle } from '../utils';

export const NormalInputSelect = ({
	label,
	value,
	suffixIcon,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	onChange,
	disabled,
	loading,
	options = [],
	onBlur = null,
	width = '100%',
	gap = '.5rem',
}) => {
	return (
		<div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
			<Select
				value={value}
				onChange={(val) => onChange(val, inputName, recordKey)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
			/>
		</div>
	);
}
