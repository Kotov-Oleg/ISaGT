import {$authHost, $host} from "./index";
import {ResponseMessageI} from './types';

export interface SliderI {
  id: number
  title: string
  body: string
  img: string
  link: string
}

export const getSliders = async (): Promise<SliderI[]> => {
  try {
    const {data} = await $host.get<SliderI[]>(`api/slider`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}