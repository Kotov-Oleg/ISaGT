import { $authHost, $host} from "./index";
import jwt_decode from 'jwt-decode'
import {AxiosResponse} from "axios";

export interface UserDataI {
  id: number,
  name: string,
  role: string
}

// Авторизация
export const login = async (login: string, password: string): Promise<UserDataI> => {
  try {
    const {data}: AxiosResponse<{ token: string }> = await $host.post('api/user/login', { login, password });
    // Для проверки авторизации при обновлении страницы
    localStorage.setItem('token', data.token);
    return jwt_decode<UserDataI>(data.token);
  } catch (err: any) {
    throw new Error(
      err.response.status == 0
      ? 'Ошибка соединения!'
      : err.response.data.message
    )
  }
};

// Проверка авторизации (при обновлении страницы)
export const checkAuth = async (): Promise<UserDataI> => {
  try {
    const {data}: AxiosResponse<{ token: string }> =  await $authHost.get('api/user/auth');
    localStorage.setItem('token', data.token);
    return jwt_decode<UserDataI>(data.token);
  } catch (err: any) {
    throw new Error(
      err.response.status == 0
        ? 'Ошибка соединения!'
        : err.response.data.message
    )
  }
}