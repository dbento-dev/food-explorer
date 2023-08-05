import { toast } from 'react-toastify'
import { removeSessionData } from './sessionServices'

let serverErrorCounter = 0
let notAuthorizedCounter = 0

const errorNotification = (message) => {
  toast.error(message)
}

const handleServerError = (error) => {
  if (error?.response?.status === 500) {
    console.log('entrei no handleServerError', error)
    serverErrorCounter += 1
  } else {
    console.log('entrei no handleServerError else', error)
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

const errorHandler = (err) => {
  handleServerError(err)
  handleRequestNotAuthorized(err)

  if (serverErrorCounter === 1) {
    return errorNotification(
      'Ocorreu um erro na conexão com o servidor, por favor, atualize a página'
    )
  }

  if (notAuthorizedCounter === 1) {
    return errorNotification(
      'Sua sessão expirou, por favor, entre novamente com seu login e senha.'
    )
  }

  if (notAuthorizedCounter > 0 || serverErrorCounter > 0) return null
}

export default errorHandler
