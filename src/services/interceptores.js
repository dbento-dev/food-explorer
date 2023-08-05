import errorHandler from '../helpers/errorHandler'

export const interceptorsResponseSuccess = (response) => response

export const interceptorsResponseWithAuthError = (error) => {
  if (error?.response?.status) {
    if (error.response.status === 401) {
      if (error?.response?.data?.message) {
        errorHandler(error.response.data.message)
      } else {
        errorHandler(
          'Ocorreu um erro na conexão com o servidor, por favor, atualize a página'
        )
      }
    } else {
      errorHandler(
        'Ocorreu um erro na conexão com o servidor, por favor, atualize a página'
      )
    }
  }
  return Promise.reject(error)
}
