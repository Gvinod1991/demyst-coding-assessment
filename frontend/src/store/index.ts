import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { reportApi } from '../features/reports/reportApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [reportApi.reducerPath]: reportApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reportApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)