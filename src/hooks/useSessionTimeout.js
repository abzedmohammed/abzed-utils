import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSessionTimeout = (logoutCallback, timeout = 5 * 60 * 1000) => {
	const navigate = useNavigate();
	const timeoutId = useRef(null);

	const resetTimeout = () => {
		if (timeoutId.current) clearTimeout(timeoutId.current);
		timeoutId.current = setTimeout(() => {
			logoutCallback();
			navigate('/auth/login');
		}, timeout);
	};

	useEffect(() => {
		const events = ['mousemove', 'keydown', 'click', 'scroll'];

		events.forEach((event) => window.addEventListener(event, resetTimeout));

		resetTimeout(); // Initialize on mount

		return () => {
			events.forEach((event) =>
				window.removeEventListener(event, resetTimeout)
			);
			if (timeoutId.current) clearTimeout(timeoutId.current);
		};
	}, []);
};
