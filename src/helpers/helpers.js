import { api } from '../services/api'

export function isAdminUser(scope) {
  return scope === 1
}

export function generateImageUrl(image) {
  if (!image) return
  const imageUrl = `${api.defaults.baseURL}/files/${image}`

  return imageUrl
}

export function transformPrice(price) {
  let priceValue = parseFloat(price.replace(',', '.'))

  return priceValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}

export function capitalizeString(str) {
  if (typeof str !== 'string') {
    throw new Error('O argumento deve ser uma string.')
  }

  if (str.length === 0) {
    return str
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}
