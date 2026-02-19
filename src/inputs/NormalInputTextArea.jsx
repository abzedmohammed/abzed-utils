import TextArea from 'antd/es/input/TextArea';
import PropTypes from 'prop-types';
import { defaultInputStyle } from '../utils';

export const NormalInputTextArea = ({
	label,
    value,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	onChange,
	onValueChange,
	onBlur = null,
	readOnly,
	width = '100%',
	gap = '.5rem',
	rows = 3,
	cols,
	disabled = false,
}) => {
	const resolvedOnChange = onValueChange ?? onChange;

	return (
		<div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
			<TextArea
				readOnly={readOnly}
				value={value}
				onChange={e => resolvedOnChange?.(e.target.value, inputName, recordKey)}
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
	onChange: PropTypes.func,
	onValueChange: PropTypes.func,
	onBlur: PropTypes.func,
	readOnly: PropTypes.bool,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rows: PropTypes.number,
	cols: PropTypes.number,
	disabled: PropTypes.bool,
};
