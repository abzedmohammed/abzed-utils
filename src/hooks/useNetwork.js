import { useEffect, useState } from 'react';

const getOnlineState = () =>
	typeof navigator !== 'undefined' ? navigator.onLine : true;

export const useNetworkStatus = () => {
    const [isOnline, setOnline] = useState(getOnlineState);

    useEffect(() => {
        if (typeof window === 'undefined') return undefined;

        const updateNetworkStatus = () => setOnline(navigator.onLine);

        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);

        return () => {
            window.removeEventListener('online', updateNetworkStatus);
            window.removeEventListener('offline', updateNetworkStatus);
        };
    }, []);

    return { isOnline };
};
