/**
 *  Api Utils
 */

import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { CommonRequest } from '../models/commons/CommonModels';

const apiKey =
  'test_ccfe04bc0495562fbbcf5c371829382da0de4f332b3d75a513bdf5dd3606d6c0efe8d04e6d233bd35cf2fabdeb93fb0d';

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  return config;
};
const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};

const onError = (error: AxiosError): Promise<any> => {
  return Promise.reject(error);
};
const commonAxios = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
    'x-nxopen-api-key': apiKey,
  },
  // 쿠키 포함한 요청 가능 (CORS 정책 관련)
  withCredentials: true,
});

commonAxios.interceptors.request.use(onRequest);
commonAxios.interceptors.response.use(onResponse, onError);

export const getRestApi = async <T>(request: CommonRequest): Promise<T> => {
  const { data }: AxiosResponse<T> = await commonAxios.get(`${request.url}`, {
    params: request.params,
    headers: request.headers,
  });

  return data;
};

export const postRestApi = async <T>(request: CommonRequest): Promise<T> => {
  const { data }: AxiosResponse<T> = await commonAxios.post(
    `${request.url}`,
    request.requestBody,
    {
      params: request.params,
    }
  );
  return data;
};
