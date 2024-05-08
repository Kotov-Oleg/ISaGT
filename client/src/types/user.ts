export interface UserDataI {
  id: number
  name: string
  surname: string
  patronymic: string
  access: UserAccessI
}

export interface UserAccessI {
  super: boolean
  slider: boolean
  news: boolean
  pages: boolean
  events: boolean
  faq: boolean
}