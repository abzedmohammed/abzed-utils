import { useEffect, useState } from 'react';

export const useNetworkStatus = () => {
    const [isOnline, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const updateNetworkStatus = () => setOnline(navigator.onLine);

        window.addEventListener('online', updateNetworkStatus);
        window.addEventListener('offline', updateNetworkStatus);

        return () => {
            window.removeEventListener('online', updateNetworkStatus);
            window.removeEventListener('offline', updateNetworkStatus);
        };
    }, []);

    return { isOnline };
}
