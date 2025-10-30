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
	transformResults = null,
	width = '100%',
	gap = '.5rem',
}) => {
	const [isFetching, setIsFetching] = useState(false);
	const [fetchedData, setFetchedData] = useState([]);
	const [allData, setallData] = useState([]);

	const timeoutRef = useRef(null);

	const handleKeyValueChange = (val, option) => {
		
		if (onChange) {
			const response = {
				value: val,
				inputName,
				label: option?.label,
				allData,
			}
			onChange(response);
		}
	};

	const handleSearch = (searchTerm) => {
		if (!fetchFunc) return;

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(async () => {
			setIsFetching(true);

			try {
				const rawData = await fetchFunc(searchTerm);

				const mappedData = transformResults
					? transformResults(rawData?.data?.data?.result)
					: rawData;

				setallData(rawData?.data?.data?.result);
				setFetchedData(Array.isArray(mappedData) ? mappedData : []);
			} catch (error) {
				console.error('SearchInput fetch error:', error);
				setFetchedData([]);
				setallData([]);
			} finally {
				setIsFetching(false);
			}
		}, 300);
	};

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
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
