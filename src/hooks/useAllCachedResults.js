import { useEffect, useState, useRef } from 'react';
import { queryClient } from '../queryClient';

const getByPath = (obj, path = []) =>
	path.reduce((acc, key) => acc?.[key], obj);
const DEFAULT_RESULT_PATH = ['data', 'data', 'data', 'result'];

export const useAllCachedResults = ({
	baseKey,
	extractor,
	resultPath = DEFAULT_RESULT_PATH,
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
					const extracted = extractor
						? extractor(query.state)
						: getByPath(query.state, resultPath);
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
	}, [baseKey, extractor, resultPath]);

	return results;
}
