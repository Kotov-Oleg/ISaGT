import {$authHost, $host} from "./index";
import {DocumentI} from "src/components/react-blocks/page-collector/PageCollector";

interface PageI {
  id: number
  name: string
  data: DocumentI[]
}
// Одна новость
export const getPage = async (pageName: string): Promise<PageI> => {
  try {
    const {data} = await $host.get<PageI>(`api/pages/${pageName}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}