import { useEffect, useRef, useState } from 'react';

export const useFetchPost = ({ url, body = {}, dependency, onRequestError }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');
	const [data, setData] = useState([]);
	const serializedBody = JSON.stringify(body ?? {});
	const onRequestErrorRef = useRef(onRequestError);

	useEffect(() => {
		onRequestErrorRef.current = onRequestError;
	}, [onRequestError]);

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const fetchData = async () => {
			setIsLoading(true);
			setIsError('');

			try {
				const token = localStorage.getItem('token');
				const headers = {
					'Content-Type': 'application/json',
				};

				if (token) {
					headers.Authorization = `Bearer ${token}`;
				}

				const res = await fetch(url, {
					method: 'POST',
					headers,
					credentials: "include",
					body: serializedBody,
					signal: controller.signal,
				});

				if (!res.ok) {
					if ([401, 403, 400].includes(res.status)) {
						onRequestErrorRef.current?.();
					}
					if (isMounted) {
						setIsError(`Request failed with status ${res.status}`);
					}
					return;
				}

				const response = await res.json();
				if (isMounted) {
					setData(response?.data?.result || []);
				}
			} catch (error) {
				if (error?.name !== 'AbortError' && isMounted) {
					setIsError(error.message || 'An error occurred');
				}
			} finally {
				if (isMounted) {
					setIsLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, [url, dependency, serializedBody]);
	
	return { isLoading, isError, data };
};
