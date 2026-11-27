import { useState } from 'react'
import { useNavigate } from 'react-router'
import { supabase } from '../../lib/supabase'
import Button from '../button/Button'

const SignOutButton = () => {
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
    <>
      {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}
      <Button variant="navy" onClick={handleSignOut} disabled={pending} className="mt-6 px-6 py-3">
        {pending ? 'Saindo...' : 'Sair da conta'}
      </Button>
    </>
  )
}

export default SignOutButton
