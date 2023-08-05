export const setSessionData = (data) => {
  const { token, user } = data
  localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
  localStorage.setItem('@foodexplorer:token', token)
}

export const removeSessionData = () => {
  localStorage.removeItem('@foodexplorer:token')
  localStorage.removeItem('@foodexplorer:user')
}
