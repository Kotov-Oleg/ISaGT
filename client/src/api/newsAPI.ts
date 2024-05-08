import {$authHost} from "./index";
import {ResponseMessageI} from './types';
import FormData from 'form-data'
import {UploadFile} from "antd";

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
}

export interface NewsCardsI extends NewsLineI{
  preview: any //img
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
    const {data} = await $authHost.get<number>(`api/news/page_count`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Список новостей
export const getNewsCards = async (params: NewsParamsI): Promise<NewsCardsI[]> => {
  try {
    const {data} = await $authHost.get<NewsCardsI[]>(`api/news`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export const getNews = async (params: NewsParamsI): Promise<NewsLineI[]> => {
  try {
    const {data} = await $authHost.get<NewsLineI[]>(`api/news/admin`,
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

interface CreateNewsI {
  title: string
  date: string
  document: Object
  preview: UploadFile
}
// Добавление новости | title.length <= 150
export const createNews = async (data: CreateNewsI): Promise<ResponseMessageI> => {
  try {
    let formData = new FormData()
    formData.append('title', data.title);
    formData.append('date', data.date);
    formData.append('document', '{}');
    formData.append('preview', data.preview);
    const {data: response} = await $authHost.post<ResponseMessageI>(`api/news`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

