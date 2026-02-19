import { Select, Spin } from 'antd';
import PropTypes from 'prop-types';
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
	onValueChange,
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
		<div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
			<Select
				value={value}
				mode={normalizedMode}
				showSearch={resolvedShowSearch}
				maxTagCount={maxTagCount}
				onChange={(val) => resolvedOnChange?.(val, inputName, recordKey)}
				className={inputClassName}
				placeholder={placeholder}
				onBlur={onBlur}
				disabled={disabled || loading}
				options={options}
				suffixIcon={loading ? <Spin /> : suffixIcon}
			/>
		</div>
	);
};

NormalInputSelect.propTypes = {
	label: PropTypes.node,
	value: PropTypes.any,
	suffixIcon: PropTypes.node,
	inputName: PropTypes.string,
	recordKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	onChange: PropTypes.func,
	onValueChange: PropTypes.func,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.node,
			value: PropTypes.any,
			disabled: PropTypes.bool,
		})
	),
	onBlur: PropTypes.func,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	mode: PropTypes.oneOf([null, 'default', 'multiple', 'tags']),
	maxTagCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	showSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};
