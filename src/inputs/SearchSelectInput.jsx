import { useEffect, useRef, useState } from 'react';
import { Select, Spin } from 'antd';
import { defaultInputStyle } from '../utils';

export const SearchSelectInput = ({
	label,
	value,
	suffixIcon,
	inputName,
	placeholder,
	inputClassName,
	onChange,
	disabled,
	mode = 'default',
	showSearch,
	onDeselect = null,
	fetchFunc,
	extractResults = (rawData) => rawData?.data?.data?.result,
	transformResults = null,
	width = '100%',
	gap = '.5rem',
}) => {
	const [isFetching, setIsFetching] = useState(false);
	const [fetchedData, setFetchedData] = useState([]);
	const [allData, setAllData] = useState([]);

	const timeoutRef = useRef(null);

	const handleKeyValueChange = (val, option) => {
		onChange?.({
			value: val,
			inputName,
			label: option?.label,
			allData,
		});
	};

	const handleSearch = (searchTerm) => {
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
		}, 300);
	};

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
				showSearch={showSearch}
				mode={mode}
				maxTagCount={mode === 'multiple' ? 1 : null}
				className={inputClassName}
				placeholder={placeholder}
				optionFilterProp='label'
				onChange={handleKeyValueChange}
				onDeselect={onDeselect}
				onSearch={handleSearch}
				onFocus={() => handleSearch('')}
				options={fetchedData}
			/>
		</div>
	);
}
