import {$authHost, $host} from "./index";
import {DocumentI} from "src/components/react-blocks/page-collector/PageCollector";

interface PageI {
  id: number
  alias: string
  document: DocumentI[]
}
// Одна новость
export const getPage = async (alias: string, facultyId: number): Promise<DocumentI[]> => {
  try {
    const {data} = await $host.get<DocumentI[]>(`api/page/one_page/`, {params: {alias, facultyId}})
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}

// Не одна новость
export const getPages = async (facultyId: number): Promise<PageI> => {
  try {
    const {data} = await $host.get<PageI>(`api/page/${facultyId}`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}