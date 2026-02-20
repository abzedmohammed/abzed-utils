import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 60 * 1000,        // 5 minutes
			gcTime: 10 * 60 * 1000,          // 10 minutes
			refetchOnWindowFocus: false,     // disable auto refetch on window focus
			retry: 1,                        // retry failed requests once
			retryDelay: 5000,                // wait 5s before retry
		},
		mutations: {
			retry: 0,                        // do not retry failed mutations
		},
	},
});
