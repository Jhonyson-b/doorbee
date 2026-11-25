import { Navigate, Outlet } from 'react-router'
import { useAuth } from './useAuth'

const ProtectedRoute = () => {
  const { session, loading, error } = useAuth()

  if (loading) return <p className="p-8" role="status">Carregando sua sessão...</p>
  if (error) return <p className="p-8" role="alert">{error}</p>
  if (!session) return <Navigate to="/sign-in" replace />
  return <Outlet />
}

export default ProtectedRoute
