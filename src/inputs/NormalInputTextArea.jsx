import { Input } from 'antd';
import PropTypes from 'prop-types';
import { defaultInputStyle } from '../utils';

const { TextArea } = Input;

export const NormalInputTextArea = ({
	label,
    value,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	onValueChange,
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
			{label && <label>{label}</label>}
			<TextArea
				readOnly={readOnly}
				value={value}
				onChange={e => onValueChange?.(e.target.value, inputName, recordKey)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
				rows={rows}
				cols={cols}
				disabled={disabled}
			/>
		</div>
	);
};

NormalInputTextArea.propTypes = {
	label: PropTypes.node,
	value: PropTypes.string,
	inputName: PropTypes.string,
	recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	onValueChange: PropTypes.func,
	onBlur: PropTypes.func,
	readOnly: PropTypes.bool,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rows: PropTypes.number,
	cols: PropTypes.number,
	disabled: PropTypes.bool,
};
