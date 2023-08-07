import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoutes = () => {
  const token = localStorage.getItem('@foodexplorer:token')

  return token ? <Outlet /> : <Navigate to="/login" replace />
}
