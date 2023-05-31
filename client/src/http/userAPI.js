import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode'

export const login = async (login, password) => {
  const {data} = await $host.post('api/user/login', {login, password})
  console.log('login', data)
  localStorage.setItem('token', data.token)
  return jwt_decode(data.token)
}

export const check = async () => {
  const request = await $authHost.get('api/user/auth').catch(err => {return err.response})
  if (request.status!==200 && request.status!==401) {
    return 'check_auth_error'
  }
  try {
    localStorage.setItem('token', request.data.token)
    return jwt_decode(request.data.token)
  } catch (e) {
    return 'not_auth'
  }
}