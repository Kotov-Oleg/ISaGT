import {$authHost} from "./index";

export interface NewsTag {
  value: number
  label: string
  color: string
}

// Список сотрудников
export const getTags = async (): Promise<NewsTag[]> => {
  try {
    const {data} = await $authHost.get<NewsTag[]>(`api/news_tag`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}