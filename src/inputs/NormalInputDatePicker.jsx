import { useState } from "react";
import { DatePicker } from "antd";
import { defaultInputStyle } from "../utils";

export const NormalInputDatePicker = ({
	label,
	value,
	onChange,
	inputName,
	recordKey,
	placeholder,
	inputClassName,
	readOnly = false,
	picker = 'date',
	format = 'DD/MM/YYYY',
	suffixIcon,
	maxDate,
	onBlur = null,
	width = '100%',
	gap = '.5rem',
}) => {
	const [open, setOpen] = useState(false);

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
				onChange={(e) => onChange(e, inputName, recordKey)}
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
				onBlur={onBlur}
			/>
		</div>
	);
}
