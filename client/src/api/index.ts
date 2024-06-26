import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ResponseMessageI {
  message: string
}

export const baseURL: string = process.env.API_URL;

const $host: AxiosInstance = axios.create({
  baseURL,
});

const $authHost: AxiosInstance = axios.create({
  baseURL,
});

const authInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers!.authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };