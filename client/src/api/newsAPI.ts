import {$authHost} from "./index";
import {ResponseMessageI} from './types';

interface NewsPageCountParamsI {
  q: string
  rowsPerPage: number
}

export interface NewsParamsI extends NewsPageCountParamsI {
  page: number
}

export interface NewsLineI {
  id: number
  title: string
  date: string
  preview: any //img
}

export interface NewsI {
  title: string
  date: string
  preview: any //img
  body: string
  photos: any[] //img
}

export interface OneNewsI extends NewsI{
  id: number
}

// Количество страниц
export const getNewsPageCount = async (params: NewsPageCountParamsI): Promise<number> => {
  try {
    const {data} = await $authHost.get<number>(`api/news/page_count`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Список нововстей
export const getNews = async (params: NewsParamsI): Promise<NewsLineI[]> => {
  try {
    const {data} = await $authHost.get<NewsLineI[]>(`api/news`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Одна новость
export const getOneNews = async (id: number): Promise<OneNewsI> => {
  try {
    const {data} = await $authHost.get<OneNewsI>(`api/news/${id}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Добавление нововсти | title.length <= 150
export const createNews = async (data: NewsI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.post<ResponseMessageI>(`api/news`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}