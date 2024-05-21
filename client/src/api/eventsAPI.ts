import {$authHost, $host} from "./index";
import {ResponseMessageI} from './types';

interface EventsPageCountParamsI {
  q: string
  rowsPerPage: number
}
// Количество страниц
export const getEventPageCount = async (params: EventsPageCountParamsI): Promise<number> => {
  try {
    const {data} = await $host.get<number>(`api/events/page_count`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export interface EventsParamsI extends EventsPageCountParamsI {
  page: number
}

export interface EventLineI {
  id: number
  title: string
  date: string,
  time: string
  preview: string
}

export const getEvents = async (params: EventsParamsI): Promise<EventLineI[]> => {
  try {
    const {data} = await $host.get<EventLineI[]>(`api/events`,
      {params: {...params, ie: 'UTF-8', oe: 'UTF-8'}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export interface EventI extends EventLineI {
  document: any
}
// Мероприятие
export const getEvent = async (id: number): Promise<EventI> => {
  try {
    const {data} = await $host.get<EventI>(`api/events/${id}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export interface CreateEventI {
  title: string
  date: string,
  time: string
  preview: string
  document: string
}
// Создание мероприятия | title.length <= 150
export const createEvent = async (data: CreateEventI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.post<ResponseMessageI>(`api/events`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}
export interface UpdateEventI extends CreateEventI {
  id: number
}
// Редактирование новости | title.length <= 150
export const updateNews = async (data: UpdateEventI): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.put<ResponseMessageI>(`api/events`, data)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

export const deleteNews = async (id: number): Promise<ResponseMessageI> => {
  try {
    const {data: response} = await $authHost.delete<ResponseMessageI>(`api/events/${id}`)
    return response
  } catch (err: any) { throw new Error(err.response.data.message) }
}

