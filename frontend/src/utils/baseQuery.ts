import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export const baseQuery = fetchBaseQuery({
  baseUrl: baseApiUrl,
  prepareHeaders: (headers) => {
    // Here we can auth header
    return headers;
  },
});
