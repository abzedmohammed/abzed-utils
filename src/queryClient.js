import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,        // 5 minutes
			cacheTime: 10 * 60 * 1000,       // 10 minutes
			refetchOnWindowFocus: false,     // disable auto refetch on window focus
			retry: 1,                        // retry failed requests once
			retryDelay: 1000,                // wait 1s before retry
		},
		mutations: {
			retry: 0,                        // do not retry failed mutations
		},
	},
});