import TextArea from 'antd/es/input/TextArea';
import { defaultInputStyle } from '../utils';

export const NormalInputTextArea = ({
	label,
    value,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	onChange,
	onBlur = null,
	readOnly,
	width = '100%',
	gap = '.5rem',
	rows = 3,
	cols,
	disabled = false,
}) => {
	return (
		<div style={defaultInputStyle({ width, gap })}>
			<label>{label}</label>
			<TextArea
				readOnly={readOnly}
				value={value}
				onChange={e => onChange(e.target.value, inputName, recordKey)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
				rows={rows}
				cols={cols}
				disabled={disabled}
			/>
		</div>
	);
}
