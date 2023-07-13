import { createContext, useContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { isAdminUser } from '../helpers/helpers'

export const AuthContext = createContext()

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  async function signIn({ email, password }) {
    setIsLoading(true)
    try {
      const response = await api.post('/sessions', {
        email,
        password
      })

      const { token, user } = response.data

      const isAdmin = isAdminUser(user?.is_admin)

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token, user, isAdmin })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível realizar o login, tente novamente')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:token')
    localStorage.removeItem('@foodexplorer:user')
    setData({})
  }

  useEffect(() => {
    const token = localStorage.getItem('@foodexplorer:token')
    const user = localStorage.getItem('@foodexplorer:user')

    const isAdmin = isAdminUser(JSON.parse(user)?.is_admin)

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ token, user: JSON.parse(user), isAdmin })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
        isAdmin: data.isAdmin,
        isLoading
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
