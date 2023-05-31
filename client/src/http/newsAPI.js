import { $authHost, $host } from "./index";

// Получить все новости
export const getNews = async () => {
  const response = await $host.get(`api/news`)
  return response.data
}

// Добавить новую новость
export const createNews = async (params) => {
  const response = await $host.post(`api/news`, params)
    .then(response => {
      console.log(response.data.message, response.data.id)
      return response.data.id
    })
    .catch(err => {
      console.log(err.response.data)
      return err.response.data
    })

  return response.data
}