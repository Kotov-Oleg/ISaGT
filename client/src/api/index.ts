import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ResponseMessageI {
  message: string
}

const baseURL: string = 'http://localhost:5000/';

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