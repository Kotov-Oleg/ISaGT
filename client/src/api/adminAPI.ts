import {$authHost} from "./index";
import {ResponseMessageI} from "./types";

export interface AccessI {
  super: boolean
  faculty: boolean
  slider: boolean
  news: boolean
  pages: boolean
  events: boolean
  faq: boolean
}

export interface EmployeeI {
  surname: string
  name: string
  patronymic: string
  login: string
  password: string
  access: AccessI
}

export interface EmployeeLineI extends EmployeeI{
  id: number
}

// Список сотрудников
export const getAdmins = async (): Promise<EmployeeLineI[]> => {
  try {
    const {data} = await $authHost.get<EmployeeLineI[]>(`api/admin`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Список доступов
export const getAccessOptions = async (): Promise<string[]> => {
  try {
    const {data} = await $authHost.get<string[]>(`api/admin/access_options`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Уникальность логина
export const isLoginUnique = async (login: string): Promise<boolean> => {
  const params = {login, ie: 'UTF-8', oe: 'UTF-8'}
  try {
    const {data} = await $authHost.get<boolean>(`api/admin/login_unique`, {params})
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Добавление администратора |
// surname.length <= 50 | name.length <= 50 | patronymic.length <= 50 | login.length <= 50
export const createAdmin = async (data: EmployeeI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.post<ResponseMessageI>(`api/admin`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Обновление администратора |
// surname.length <= 50 | name.length <= 50 | patronymic.length <= 50 | login.length <= 50
export const updateAdmin = async (data: EmployeeLineI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.put<ResponseMessageI>(`api/admin`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Удаление администратора
export const deleteAdmin = async (id: number) => {
  try {
    const {data: response} = await $authHost.delete<ResponseMessageI>(`api/admin/${id}`)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}