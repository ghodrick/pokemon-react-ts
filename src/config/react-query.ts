export const queryClientConfig = {
    defaultOptions: {
      queries: {
        retry: 2,
        staleTime: 1000 * 30, // 30 seconds
        cacheTime: 1000 * 300, // 5 minutes
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchInterval: false as false,
        refetchIntervalInBackground: false,
        suspense: false,
      },
      mutations: {
        retry: 2,
      },
    },
  };