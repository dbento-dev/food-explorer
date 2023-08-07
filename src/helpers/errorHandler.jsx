import { toast } from 'react-toastify'
import { removeSessionData } from './sessionServices'

let serverErrorCounter = 0
let notAuthorizedCounter = 0

const errorNotification = (message) => {
  toast.error(message)
}

const handleServerError = (error) => {
  if (error?.response?.status === 500) {
    serverErrorCounter += 1
  } else {
    serverErrorCounter = 0
  }
}

const handleRequestNotAuthorized = (error) => {
  const errorMessage = error?.response?.data?.message || ''

  if (
    errorMessage.includes('not authorized') ||
    errorMessage.includes('deny') ||
    errorMessage.includes('token inválido')
  ) {
    notAuthorizedCounter += 1
    removeSessionData()
  } else {
    notAuthorizedCounter = 0
  }
}

const errorHandler = (error) => {
  const message = error?.response?.data?.message || null

  handleServerError(error)
  handleRequestNotAuthorized(error)

  if (serverErrorCounter === 1) {
    return errorNotification(
      'Ocorreu um erro na conexão com o servidor, por favor, atualize a página'
    )
  }

  if (notAuthorizedCounter === 1) {
    errorNotification(
      'Sua sessão expirou, por favor, entre novamente com seu login e senha.'
    )

    setTimeout(() => {
      window.location.href = '/login'
    }, 1000)

    return
  }

  if (notAuthorizedCounter > 0 || serverErrorCounter > 0) return null

  return message && errorNotification(message)
}

export default errorHandler
