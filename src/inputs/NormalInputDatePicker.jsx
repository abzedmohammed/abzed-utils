import { useState } from "react";
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import { defaultInputStyle } from "../utils";

export const NormalInputDatePicker = ({
	label,
	value,
	onChange,
	onValueChange,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	readOnly = false,
	picker = 'date',
	format = 'DD/MM/YYYY',
	suffixIcon,
	maxDate,
	minDate,
	onBlur = null,
	width = '100%',
	gap = '.5rem',
	disabled = false,
}) => {
	const [open, setOpen] = useState(false);
	const resolvedOnChange = onValueChange ?? onChange;

	const handleOpenChange = (status) => {
		if (status) setOpen(true);
		else if (picker !== 'time') setOpen(false);
	};

	const handleOk = () => {
		setOpen(false);
	};

	const isTimePicker = picker === 'time';
	const timeFormat = 'hh:mm A';

	return (
		 <div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
			<DatePicker
				value={value}
				onChange={(e) => resolvedOnChange?.(e, inputName, recordKey)}
				open={isTimePicker ? open : undefined}
				onOpenChange={handleOpenChange}
				onOk={isTimePicker ? handleOk : undefined}
				showTime={
					isTimePicker
						? {
								use12Hours: true,
								format: timeFormat,
						  }
						: undefined
				}
				format={isTimePicker ? timeFormat : format}
				suffixIcon={suffixIcon}
				readOnly={readOnly}
				placeholder={placeholder}
				className={inputClassName}
				picker={picker}
				maxDate={maxDate}
				minDate={minDate}
				onBlur={onBlur}
				disabled={disabled}
			/>
		</div>
	);
};

NormalInputDatePicker.propTypes = {
	label: PropTypes.node,
	value: PropTypes.object,
	onChange: PropTypes.func,
	onValueChange: PropTypes.func,
	inputName: PropTypes.string,
	recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	readOnly: PropTypes.bool,
	picker: PropTypes.oneOf(['date', 'week', 'month', 'quarter', 'year', 'time']),
	format: PropTypes.string,
	suffixIcon: PropTypes.node,
	maxDate: PropTypes.object,
	minDate: PropTypes.object,
	onBlur: PropTypes.func,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	disabled: PropTypes.bool,
};
