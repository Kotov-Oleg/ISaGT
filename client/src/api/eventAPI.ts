import {$authHost, $host} from "./index";
import {ResponseMessageI} from './types';

interface EventsPageCountParamsI {
  q: string
  rowsPerPage: number
  facultyId: number
}
// Количество страниц
export const getEventPageCount = async (params: EventsPageCountParamsI): Promise<number> => {
  try {
    const {data} = await $host.get<number>(`api/event/page_count`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export interface EventsParamsI extends EventsPageCountParamsI {
  page: number
  filter: 'all' | 'today'
}

interface EventI {
  title: string
  date: string,
  time: string
  preview: string
}

export interface EventLineI extends EventI{
  id: number
}

export const getEvents = async (params: EventsParamsI): Promise<EventLineI[]> => {
  try {
    const {data} = await $host.get<EventLineI[]>(`api/event`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export interface OneEventI extends EventI {
  document: any
}
// Мероприятие
export const getEvent = async (id: number): Promise<OneEventI> => {
  try {
    const {data} = await $host.get<OneEventI>(`api/event/${id}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

interface BaseEventI {
  title: string
  date: string,
  time: string
  preview: string
  document: string
}

export interface CreateEventI extends BaseEventI {
  facultyId: number
}
// Создание мероприятия | title.length <= 150
export const createEvent = async (data: CreateEventI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.post<ResponseMessageI>(`api/event`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}
export interface UpdateEventI extends BaseEventI {
  id: number
}
// Редактирование новости | title.length <= 150
export const updateNews = async (data: UpdateEventI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.put<ResponseMessageI>(`api/event`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export const deleteNews = async (id: number): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.delete<ResponseMessageI>(`api/event/${id}`)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

