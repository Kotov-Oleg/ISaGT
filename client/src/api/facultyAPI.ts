import {$host} from "src/api/index";
import {FacultyI} from "src/store/facultyStore";

export const getFaculties = async (): Promise<FacultyI[]> => {
  try {
    const {data} = await $host.get<FacultyI[]>(`api/faculty/`)
    return data
  } catch (err: any) { throw new Error(err.response.data.message) }
}