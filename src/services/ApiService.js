import { get, post } from '@/services/HttpService'

export async function login({ email, password }) {
  const userData = await post('/login/', { email, password })
  return userData
}
