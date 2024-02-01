import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ResponseMessageI {
  message: string
}

const baseURL = process.env.REACT_APP_API_URL;

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