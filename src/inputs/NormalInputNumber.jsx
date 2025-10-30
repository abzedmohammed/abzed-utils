import { InputNumber } from 'antd';
import { defaultInputStyle } from '../utils';

export const NormalInputNumber = ({
	label,
    value,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	onChange,
	onBlur = null,
	readOnly,
	prefix=null,
	width = '100%',
	gap = '.5rem',
}) => {
	return (
		<div style={defaultInputStyle({ width, gap })}>
			<label>{label}</label>
			<InputNumber
				prefix={prefix}
				readOnly={readOnly}
				value={value}
				onChange={val => onChange(val, inputName, recordKey)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
			/>
		</div>
	);
}
