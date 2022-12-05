import axios from 'axios'
import { defaults } from 'lodash'

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

request.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = defaults(config.headers, {
      Authorization: `Bearer ${token}`,
    })
  }
  return config
})

request.interceptors.response.use(
  response => {
    return response.data
  },
  error => Promise.reject(error)
)
