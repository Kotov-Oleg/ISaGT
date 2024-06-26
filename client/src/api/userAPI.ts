import { $authHost, $host} from "./index";
import {jwtDecode} from 'jwt-decode'
import {AxiosResponse} from "axios";
import {UserDataI} from "src/types/user";



// Авторизация
export const login = async (login: string, password: string): Promise<UserDataI> => {
  try {
    console.log('сработала авторизация')
    const {data}: AxiosResponse<{ token: string }> = await $host.post('api/user/login', { login, password });
    // Для проверки авторизации при обновлении страницы
    localStorage.setItem('token', data.token);
    return jwtDecode<UserDataI>(data.token);
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
    return jwtDecode<UserDataI>(data.token);
  } catch (err: any) {
    throw new Error(
      err.response.status == 0
        ? 'Ошибка соединения!'
        : err.response.data.message
    )
  }
}