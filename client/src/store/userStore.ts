import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {UserDataI} from "src/types/user";

export interface UserState {
  isAuth: boolean
  user: UserDataI | null
  login: (a: UserDataI) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  devtools(
    (set) => ({
      isAuth: false,
      user: null,
      login: (user: UserDataI) => set(state => {
        return ({isAuth: true, user: user})
      }),
      logout: () => set(state => {
        localStorage.removeItem('token')
        return ({isAuth: false, user: null})
      })
    })
  )
)