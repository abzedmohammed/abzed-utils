import { useEffect, useState, useRef } from 'react';
import { queryClient } from '../queryClient';

export const useAllCachedResults = ({
	baseKey,
	extractor = (state) => state?.data?.data?.data?.result,
}) => {
	const [results, setResults] = useState([]);
	const prevResultsRef = useRef([]);

	useEffect(() => {
		let mounted = true;

		const collect = () => {
			const all = queryClient
				.getQueryCache()
				.findAll({ queryKey: [baseKey] })
				.flatMap((query) => {
					const extracted = extractor(query.state);
					return Array.isArray(extracted) ? extracted : [];
				});

			if (
				JSON.stringify(prevResultsRef.current) !== JSON.stringify(all)
			) {
				prevResultsRef.current = all;
				if (mounted) {
					setResults(all);
				}
			}
		};

		collect();

		const unsubscribe = queryClient.getQueryCache().subscribe(collect);

		return () => {
			mounted = false;
			unsubscribe();
		};
	}, [baseKey, extractor]);

	return results;
}
