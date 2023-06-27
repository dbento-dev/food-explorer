import { api } from '../services/api'

export function isAdminUser(scope) {
  return scope === 1
}

export function generateImageUrl(image) {
  if (!image) return
  const imageUrl = `${api.defaults.baseURL}/files/${image}`

  return imageUrl
}
