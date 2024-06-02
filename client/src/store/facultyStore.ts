import {create} from "zustand";
import {devtools} from "zustand/middleware";


export interface FacultyI {
  fullName: string
  abbreviation: string
  alias: string
  mail: string | null
  phone: string | null
  address: string | null
}

interface FacultiesI {
  faculties: FacultyI[]
  loadFaculties: (a: FacultyI[]) => void
}

export const useFacultyStore = create<FacultiesI>()(
  devtools(
    (set) => ({
      faculties: [],
      loadFaculties: (a: FacultyI[]) => set(state => ({...state, faculties: a}))
    })
  )
)