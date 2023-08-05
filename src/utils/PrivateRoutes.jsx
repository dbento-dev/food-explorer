import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

export const PrivateRoutes = () => {
  const { token } = useAuth()

  return token ? <Outlet /> : <Navigate to="/login" replace />
}
