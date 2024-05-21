import {$authHost, $host} from "./index";
import {ResponseMessageI} from './types';

interface NewsPageCountParamsI {
  q: string
  rowsPerPage: number
}

export interface NewsParamsI extends NewsPageCountParamsI {
  page: number
  filter: 'all' | 'today' // Все новости или исключая будущие новости
}

export interface NewsLineI {
  id: number
  title: string
  date: string,
  preview: string
}

export interface NewsI {
  title: string
  date: string
  preview: string
  document: string
}

export interface OneNewsI extends NewsI{
  id: number
}

// Количество страниц
export const getNewsPageCount = async (params: NewsPageCountParamsI): Promise<number> => {
  try {
    const {data} = await $host.get<number>(`api/news/page_count`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export const getNews = async (params: NewsParamsI): Promise<NewsLineI[]> => {
  try {
    const {data} = await $host.get<NewsLineI[]>(`api/news`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Одна новость
export const getOneNews = async (id: number): Promise<OneNewsI> => {
  try {
    const {data} = await $host.get<OneNewsI>(`api/news/${id}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

interface CreateNewsI {
  title: string
  date: string
  document: Object
  fileName: string
}

// Добавление новости | title.length <= 150
export const createNews = async (data: CreateNewsI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.post<ResponseMessageI>(`api/news`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

interface UpdateNewsI extends CreateNewsI {
  id: number
}

// Редактирование новости | title.length <= 150
export const updateNews = async (data: UpdateNewsI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.put<ResponseMessageI>(`api/news`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export const deleteNews = async (id: number): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.delete<ResponseMessageI>(`api/news/${id}`)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

