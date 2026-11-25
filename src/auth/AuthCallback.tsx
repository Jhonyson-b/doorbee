import { Navigate } from 'react-router'
import { useAuth } from './useAuth'

const AuthCallback = () => {
  const { session, loading, error } = useAuth()

  if (loading) return <p className="p-8" role="status">Concluindo autenticação...</p>
  if (error) return <p className="p-8" role="alert">{error}</p>
  if (!session) {
    return <Navigate to="/sign-in" replace state={{ authError: 'Não foi possível concluir a autenticação. Tente novamente ou solicite um novo link.' }} />
  }
  return <Navigate to="/dashboard" replace />
}

export default AuthCallback
