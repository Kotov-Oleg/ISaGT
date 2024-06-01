import {$host} from "src/api/index";

export const getFaculties = async (): Promise<number> => {
  try {
    const {data} = await $host.get<number>(`api/faculty/`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}