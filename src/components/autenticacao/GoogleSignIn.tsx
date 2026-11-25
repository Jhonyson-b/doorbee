import { authRedirectUrl } from '../../auth/authRedirect'
import { supabase } from '../../lib/supabase'
import Button from '../button/Button'

type GoogleSignInProps = {
  pending: boolean
  setPending: (pending: boolean) => void
  setError: (error: string) => void
}

const GoogleSignIn = ({ pending, setPending, setError }: GoogleSignInProps) => {
  const handleGoogle = async () => {
    setError('')
    setPending(true)
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: authRedirectUrl() },
      })
      if (error) throw error
    } catch (error) {
      console.error('Erro ao entrar com Google:', error)
      setError('Não foi possível iniciar o acesso com Google. Tente novamente.')
      setPending(false)
    }
  }

  return (
    <>
      <Button variant="outline" onClick={handleGoogle} disabled={pending} className="mt-7 w-full px-5 py-3">
        Continuar com Google
      </Button>
      <div className="my-6 flex items-center gap-3 text-sm text-slate" aria-hidden="true">
        <span className="h-px flex-1 bg-sky-light" /> ou com e-mail <span className="h-px flex-1 bg-sky-light" />
      </div>
    </>
  )
}

export default GoogleSignIn
