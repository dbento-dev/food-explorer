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

export function truncateString(str, limit) {
  if (typeof str !== 'string') {
    throw new Error('O argumento deve ser uma string.')
  }

  if (str.length <= limit) {
    return str
  } else {
    return str.substring(0, limit) + '...'
  }
}

export function breakpoint() {
  let breakpoints = {
    '(min-width: 1200px)': 'xl',
    '(min-width: 992px) and (max-width: 1199.98px)': 'lg',
    '(min-width: 768px) and (max-width: 991.98px)': 'md',
    '(min-width: 576px) and (max-width: 767.98px)': 'sm',
    '(max-width: 575.98px)': 'xs'
  }

  console.log(breakpoints)

  for (let media in breakpoints) {
    if (window.matchMedia(media).matches) {
      return breakpoints[media]
    }
  }

  return null
}
