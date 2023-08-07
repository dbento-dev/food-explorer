export const interceptorsResponseSuccess = (response) => response

export const interceptorsResponseError = (error) => {
  return Promise.reject(error)
}
