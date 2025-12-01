import { Form, Select, Spin } from 'antd';

export const FormInputSelect = ({
	label,
	inputName,
	className,
	options = [],
	inputClassName,
	required = true,
	loading = false,
	disabled = false,
	onChange= null,
	suffixIcon,
	placeholder,
	showSearch,
	mode = null,
	maxTagCount = 1,
	extraRules = [],
}) => {
	return (
		<Form.Item
			rules={[
				{
					required: required,
					message: 'Field is required',
				},
				...extraRules,
			]}
			className={className}
			name={inputName}
			label={label}>
			<Select
				placeholder={placeholder}
				mode={mode}
				maxTagCount={maxTagCount}
				onChange={onChange}
				showSearch={showSearch}
				className={inputClassName}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
				filterOption={(input, option) =>
					(option?.label?.toLocaleLowerCase() ?? '').includes(
						input?.toLocaleLowerCase()
					)
				}
				// filterSort={(optionA, optionB) =>
				// 	(optionA?.label ?? '')
				// 		.toLowerCase()
				// 		.localeCompare((optionB?.label ?? '').toLowerCase())
				// }
			/>
		</Form.Item>
	);
}
