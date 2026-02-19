import { useEffect, useRef, useState } from 'react';
import { Select, Spin } from 'antd';
import PropTypes from 'prop-types';
import { defaultInputStyle } from '../utils';

export const SearchSelectInput = ({
	label,
	value,
	suffixIcon,
	inputName,
	placeholder,
	inputClassName,
	onChange,
	onValueChange,
	disabled,
	mode = 'default',
	showSearch,
	onDeselect = null,
	fetchFunc,
	extractResults = (rawData) => rawData?.data?.data?.result,
	transformResults = null,
	debounceMs = 300,
	width = '100%',
	gap = '.5rem',
}) => {
	const [isFetching, setIsFetching] = useState(false);
	const [fetchedData, setFetchedData] = useState([]);
	const [allData, setAllData] = useState([]);

	const timeoutRef = useRef(null);
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
				: Boolean(fetchFunc) || isModeSearchEnabled;
	const resolvedShowSearch = shouldEnableSearch
		? {
				optionFilterProp: 'label',
				onSearch: handleSearch,
				...(hasObjectShowSearch ? showSearch : {}),
		  }
		: false;
	const resolvedOnChange = onValueChange ?? onChange;

	const handleKeyValueChange = (val, option) => {
		resolvedOnChange?.({
			value: val,
			inputName,
			label: option?.label,
			allData,
		});
	};

	function handleSearch(searchTerm) {
		if (!fetchFunc) return;

		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		timeoutRef.current = setTimeout(async () => {
			setIsFetching(true);

			try {
				const rawData = await fetchFunc(searchTerm);
				const results = extractResults(rawData);
				const safeResults = Array.isArray(results) ? results : [];
				const mappedData = transformResults
					? transformResults(safeResults, rawData)
					: safeResults;

				setAllData(safeResults);
				setFetchedData(Array.isArray(mappedData) ? mappedData : []);
			} catch (error) {
				console.error('SearchInput fetch error:', error);
				setFetchedData([]);
				setAllData([]);
			} finally {
				setIsFetching(false);
			}
		}, debounceMs);
	}

	useEffect(() => {
		return () => timeoutRef.current && clearTimeout(timeoutRef.current);
	}, []);

	return (
		<div style={defaultInputStyle({ width, gap })}>
			{label && <label>{label}</label>}
			<Select
				disabled={disabled}
				suffixIcon={isFetching ? <Spin /> : suffixIcon}
				value={value}
				showSearch={resolvedShowSearch}
				mode={normalizedMode}
				maxTagCount={normalizedMode === 'multiple' ? 1 : undefined}
				className={inputClassName}
				placeholder={placeholder}
				onChange={handleKeyValueChange}
				onDeselect={onDeselect}
				onFocus={() => shouldEnableSearch && handleSearch('')}
				options={fetchedData}
			/>
		</div>
	);
};

SearchSelectInput.propTypes = {
	label: PropTypes.node,
	value: PropTypes.any,
	suffixIcon: PropTypes.node,
	inputName: PropTypes.string,
	placeholder: PropTypes.string,
	inputClassName: PropTypes.string,
	onChange: PropTypes.func,
	onValueChange: PropTypes.func,
	disabled: PropTypes.bool,
	mode: PropTypes.oneOf(['default', 'multiple', 'tags']),
	showSearch: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
	onDeselect: PropTypes.func,
	fetchFunc: PropTypes.func,
	extractResults: PropTypes.func,
	transformResults: PropTypes.func,
	debounceMs: PropTypes.number,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	gap: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
