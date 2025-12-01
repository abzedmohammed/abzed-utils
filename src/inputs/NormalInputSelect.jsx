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
	mode = null,
	maxTagCount = 1,
	showSearch,
}) => {
	return (
		<div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
			<Select
				value={value}
				mode={mode}
				showSearch={showSearch}
				maxTagCount={maxTagCount}
				onChange={(val) => onChange(val, inputName, recordKey)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
				filterOption={(input, option) =>
					(option?.label?.toLocaleLowerCase() ?? '').includes(
						input?.toLocaleLowerCase()
					)
				}
			/>
		</div>
	);
}
