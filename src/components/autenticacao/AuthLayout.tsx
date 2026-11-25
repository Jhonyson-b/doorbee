import type { ReactNode } from 'react'
import { Link, Navigate } from 'react-router'
import logoImage from '../../assets/images/logo-png.png'
import { useAuth } from '../../auth/useAuth'

type AuthLayoutProps = {
  title: string
  description: string
  children: ReactNode
}

const AuthLayout = ({ title, description, children }: AuthLayoutProps) => {
  const { session, loading, error } = useAuth()

  if (loading) return <p className="p-8" role="status">Carregando sua sessão...</p>
  if (error) return <p className="p-8" role="alert">{error}</p>
  if (session) return <Navigate to="/dashboard" replace />

  return (
    <main className="flex min-h-svh items-center justify-center bg-linear-to-br from-mist via-sky-light to-mist px-5 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-lg sm:p-10">
        <Link to="/" className="mb-8 inline-flex items-center gap-3" aria-label="Doorbee - início">
          <img src={logoImage} alt="" className="h-10 w-auto" />
          <span className="font-heading text-2xl font-bold text-navy">Doorbee</span>
        </Link>
        <h1 className="text-3xl">{title}</h1>
        <p className="mt-2">{description}</p>
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
