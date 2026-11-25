import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../../auth/useAuth'
import { supabase } from '../../lib/supabase'
import Button from '../button/Button'

const Dashboard = () => {
  const { session } = useAuth()
  const navigate = useNavigate()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  const handleSignOut = async () => {
    setPending(true)
    setError('')
    try {
      const { error } = await supabase.auth.signOut({ scope: 'local' })
      if (error) throw error
      navigate('/', { replace: true })
    } catch (error) {
      console.error('Erro ao sair:', error)
      setError('Não foi possível sair. Tente novamente.')
      setPending(false)
    }
  }

  return (
    <main className="min-h-svh bg-mist px-5 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-7 shadow-lg sm:p-10">
        <Link to="/" className="font-heading text-2xl font-bold text-navy">Doorbee</Link>
        <h1 className="mt-8 text-3xl">Seu painel</h1>
        <p className="mt-3">Você entrou como {session?.user.email}.</p>
        <p className="mt-2">Em breve, você poderá configurar seu Doorbee aqui.</p>
        {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}
        <Button variant="navy" onClick={handleSignOut} disabled={pending} className="mt-6 px-6 py-3">
          {pending ? 'Saindo...' : 'Sair da conta'}
        </Button>
      </div>
    </main>
  )
}

export default Dashboard
