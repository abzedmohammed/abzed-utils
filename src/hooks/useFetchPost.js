import { useEffect, useState } from 'react';

export const useFetchPost = ({ url, body = {}, dependency, onRequestError }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState('');
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setIsError('');
			
			try {
				const token = localStorage.getItem('token');
				
				const res = await fetch(url, {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
					credentials: "include",
					body: JSON.stringify(body),
				});

				if (!res.ok) {
					if ([401, 403, 400].includes(res.status)) {
                        onRequestError()
                    }
					setIsError(`Request failed with status ${res.status}`);
					setIsLoading(false);
					return;
				}

				const response = await res.json();
				setData(response?.data?.result || []);
			} catch (error) {
				setIsError(error.message || 'An error occurred');
			} finally {
				setIsLoading(false);
			}
		};
		
		fetchData();
	}, [url, dependency, JSON.stringify(body)]);
	
	return { isLoading, isError, data };
}