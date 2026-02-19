import { Form, Select, Spin } from 'antd';
import PropTypes from 'prop-types';

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
	onValueChange,
	suffixIcon,
	placeholder,
	showSearch,
	mode = null,
	maxTagCount = 1,
	extraRules = [],
}) => {
	const normalizedMode = mode === 'default' ? undefined : mode;
	const isModeSearchEnabled =
		normalizedMode === 'multiple' || normalizedMode === 'tags';
	const hasObjectShowSearch =
		showSearch &&
		typeof showSearch === 'object' &&
		!Array.isArray(showSearch);
	const shouldEnableSearch =
		typeof showSearch === 'boolean'
			? showSearch
			: hasObjectShowSearch
				? true
				: isModeSearchEnabled;
	const resolvedShowSearch = shouldEnableSearch
		? {
				filterOption: (input, option) =>
					(option?.label?.toLocaleLowerCase() ?? '').includes(
						input?.toLocaleLowerCase?.() ?? ''
					),
				...(hasObjectShowSearch ? showSearch : {}),
		  }
		: false;
	const resolvedOnChange = onValueChange ?? onChange;

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
				mode={normalizedMode}
				maxTagCount={maxTagCount}
				onChange={resolvedOnChange}
				showSearch={resolvedShowSearch}
				className={inputClassName}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
			/>
		</Form.Item>
	);
};

FormInputSelect.propTypes = {
	label: PropTypes.node,
	inputName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	className: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.node,
			value: PropTypes.any,
			disabled: PropTypes.bool,
		})
	),
	inputClassName: PropTypes.string,
	required: PropTypes.bool,
	loading: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	onValueChange: PropTypes.func,
	suffixIcon: PropTypes.node,
	placeholder: PropTypes.string,
	showSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	mode: PropTypes.oneOf([null, 'default', 'multiple', 'tags']),
	maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	extraRules: PropTypes.arrayOf(PropTypes.object),
};
