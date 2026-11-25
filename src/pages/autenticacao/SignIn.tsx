import { useState, type FormEvent } from 'react'
import { Link, useLocation } from 'react-router'
import AuthLayout from '../../components/autenticacao/AuthLayout'
import CredentialsForm from '../../components/autenticacao/CredentialsForm'
import GoogleSignIn from '../../components/autenticacao/GoogleSignIn'
import { supabase } from '../../lib/supabase'

const SignIn = () => {
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const callbackError = typeof location.state?.authError === 'string' ? location.state.authError : ''

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setPending(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password })
      if (error) throw error
    } catch (error) {
      console.error('Erro de autenticação:', error)
      setError('Não foi possível entrar. Verifique seu e-mail, senha e confirmação de cadastro.')
    } finally {
      setPending(false)
    }
  }

  return (
    <AuthLayout title="Bem-vindo de volta" description="Entre para acessar seu Doorbee.">
      <GoogleSignIn pending={pending} setPending={setPending} setError={setError} />
      <CredentialsForm
        email={email}
        password={password}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
        passwordAutoComplete="current-password"
        submitLabel="Entrar"
        pending={pending}
        error={error || callbackError}
      />
      <p className="mt-6 text-sm">
        Ainda não tem uma conta? <Link to="/sign-up" className="font-semibold text-navy underline">Criar conta</Link>
      </p>
    </AuthLayout>
  )
}

export default SignIn
