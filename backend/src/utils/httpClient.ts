import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { handleError } from "./handleError";
import dotenv from "dotenv";

dotenv.config();

const axiosDefaultConfig = {
  baseURL: process.env.API_BASE_URL!,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(axiosDefaultConfig);

export const getData = async <T>(
  url: string,
  headers: AxiosRequestConfig["headers"] = {},
  queryParams: AxiosRequestConfig["params"] = {}
): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      headers: {
        ...headers,
      },
      params: {
        ...queryParams,
      },
    };
    const response: AxiosResponse = await axiosInstance.get(url, config);
    return response.data;
  } catch (error) {
    throw handleError(error);
  }
};
