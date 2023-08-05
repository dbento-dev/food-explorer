import axios from 'axios'
import {
  interceptorsResponseSuccess,
  interceptorsResponseWithAuthError
} from './interceptores'

export const api = () => {
  let baseUrl = 'https://api-foodexplorer-jlht.onrender.com'

  const token = localStorage.getItem('@foodexplorer:token')

  const network = axios.create({
    baseURL: baseUrl,
    timeout: 999990000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })

  network.interceptors.response.use(
    (response) => interceptorsResponseSuccess(response),
    (error) => interceptorsResponseWithAuthError(error)
  )
  return network
}
