import { TimePicker } from 'antd';
import PropTypes from 'prop-types';
import { defaultInputStyle } from '../utils';

export const NormalInputTimePicker = ({
    label,
    value,
	inputName,
	recordKey,
    onChange,
	onValueChange,
	placeholder,
	inputClassName,
	readOnly = false,
	format = 'HH:mm',
	suffixIcon,
	prefix = null,
	width = '100%',
	gap = '.5rem',
	disabled = false,
}) => {
	const resolvedOnChange = onValueChange ?? onChange;

	return (
		<div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
            <TimePicker
                prefix={prefix}
                suffixIcon={suffixIcon}
				readOnly={readOnly}
				value={value}
				onChange={(val) =>
					resolvedOnChange?.(
						val ? val.format(format) : null,
						inputName,
						recordKey
					)
				}
				className={inputClassName}
				placeholder={placeholder}
				format={format}
				disabled={disabled}
			/>
		</div>
	);
};

NormalInputTimePicker.propTypes = {
	label: PropTypes.node,
	value: PropTypes.object,
	inputName: PropTypes.string,
	recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	onValueChange: PropTypes.func,
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	readOnly: PropTypes.bool,
	format: PropTypes.string,
	suffixIcon: PropTypes.node,
	prefix: PropTypes.node,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
};
