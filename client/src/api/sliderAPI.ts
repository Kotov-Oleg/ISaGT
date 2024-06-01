import {$authHost, $host} from "./index";
import {ResponseMessageI} from './types';

export interface SliderI {
  id: number
  title: string
  body: string
  img: string
  link: string
  number: number
}

export const getSliders = async (facultyId: number): Promise<SliderI[]> => {
  try {
    const {data} = await $host.get<SliderI[]>(`api/slider/${facultyId}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}