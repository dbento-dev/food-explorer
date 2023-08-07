import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { capitalizeString, isAdminUser } from '../helpers/helpers'
import { toast } from 'react-toastify'

import jwt_decode from 'jwt-decode'

import errorHandler from '../helpers/errorHandler'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  async function signIn({ email, password }) {
    setIsLoading(true)
    try {
      const response = await api().post('/sessions', {
        email,
        password
      })

      const { token, user } = response.data

      const isAdmin = isAdminUser(user?.is_admin)

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      setData({ token, user, isAdmin })
      setIsLoading(false)
      toast.info(`Seja bem-vindo, ${capitalizeString(user?.name)}!`)
    } catch (error) {
      setIsLoading(false)
      errorHandler(error)
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')
    setData({})
  }

  const isTokenValid = (_token) => {
    try {
      const decodedToken = jwt_decode(_token)
      const currentTime = Date.now() / 1000
      return decodedToken.exp > currentTime
    } catch (error) {
      return false
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')

    const isAdmin = isAdminUser(JSON.parse(user)?.is_admin)

    if (!isTokenValid(token)) {
      signOut()
    }

    if (token && user) {
      api().defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user: JSON.parse(user), isAdmin })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        token: data.token,
        isAdmin: data.isAdmin,
        isLoading,
        isTokenValid
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
