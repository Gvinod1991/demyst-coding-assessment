import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(import.meta.env.VITE_BASE_API_URL);
const baseApiUrl = import.meta.env.VITE_BASE_API_URL

console.log(baseApiUrl)
export const baseQuery = fetchBaseQuery({
  baseUrl: baseApiUrl,
  prepareHeaders: (headers) => {
    // Here we can auth header
    return headers;
  },
});
