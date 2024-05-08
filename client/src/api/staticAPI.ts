import {$authHost, $host} from "src/api/index";
import FormData from "form-data";

interface StaticParamsI {
  name: string
}

// Получение изображения
export const getStatic = async (params: StaticParamsI): Promise<any> => {
  try {
    console.log('params', params)
    const {data} = await $authHost.get<File>(`api/static/`,
      {params: {...params}}
    )
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}