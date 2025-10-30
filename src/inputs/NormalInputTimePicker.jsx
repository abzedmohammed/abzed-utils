import { TimePicker } from 'antd';
import { defaultInputStyle } from '../utils';

export const NormalInputTimePicker = ({
    label,
    value,
	inputName,
	recordKey,
    onChange,
	placeholder,
	inputClassName,
	readOnly = false,
	format = 'HH:mm',
	suffixIcon,
	prefix = null,
	width = '100%',
	gap = '.5rem',
}) => {
	return (
		<div style={defaultInputStyle({ width, gap })}>
			<label>{label}</label>
            <TimePicker
                prefix={prefix}
                suffixIcon={suffixIcon}
                readOnly={readOnly}
				value={value}
				onChange={(val) =>
					onChange(
						val ? val.format(format) : null,
						inputName,
						recordKey
					)
				}
				className={inputClassName}
				placeholder={placeholder}
				format={format}
			/>
		</div>
	);
}
