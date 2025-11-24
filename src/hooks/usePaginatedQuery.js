import { useState, useMemo, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useQuery } from '@tanstack/react-query';

export const usePaginatedQuery = ({
	queryConfig, // { queryKey, queryFn }
	defaultLimit = 10,
	extraParams = {}, // additional query params
	searchDelay = 400,
	enabled = true,
	resetPagination,
	refetchInterval=null,
}) => {
	const [selectedObj, setSelectedObj] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [limit, setLimit] = useState(defaultLimit);
	const [start, setStart] = useState(0);
	const [search, setSearch] = useState('');
	const [debouncedSearch] = useDebounce(search, searchDelay);

	const body = useMemo(
		() => ({
			start,
			limit,
			searchTerm: debouncedSearch,
			...extraParams,
		}),
		[start, limit, debouncedSearch, extraParams]
	);

	const { data, isLoading, refetch } = useQuery({
		queryKey: [
			...queryConfig.queryKey,
			currentPage,
			limit,
			debouncedSearch,
			extraParams,
		],
		queryFn: () => queryConfig.queryFn(body),
		placeholderData: prev => prev,
		enabled,
		refetchInterval: refetchInterval,
	});

	const total = data?.data?.total || 0;
	const dataList = data?.data?.data?.result || [];

	useEffect(() => {
		setCurrentPage(1);
		setStart(0);
		setSelectedObj({});
	}, [limit, resetPagination]);

	return {
		selectedObj,
		setSelectedObj,
		currentPage,
		setCurrentPage,
		limit,
		setLimit,
		start,
		setStart,
		search,
		setSearch,
		data,
		dataList,
		total,
		isLoading,
		refetch,
		body,
	};
};
