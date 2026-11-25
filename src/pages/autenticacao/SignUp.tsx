import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'
import { authRedirectUrl } from '../../auth/authRedirect'
import AuthLayout from '../../components/autenticacao/AuthLayout'
import CredentialsForm from '../../components/autenticacao/CredentialsForm'
import GoogleSignIn from '../../components/autenticacao/GoogleSignIn'
import { supabase } from '../../lib/supabase'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [confirmation, setConfirmation] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setPending(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: { emailRedirectTo: authRedirectUrl() },
      })
      if (error) throw error
      if (!data.session) setConfirmation(true)
    } catch (error) {
      console.error('Erro de autenticação:', error)
      setError('Não foi possível criar a conta. Verifique os dados e tente novamente.')
    } finally {
      setPending(false)
    }
  }

  return (
    <AuthLayout title="Crie sua conta" description="Comece criando seu Doorbee.">
      {confirmation ? (
        <div className="mt-6 rounded-xl bg-sky-light p-4" role="status">
          <p>Se o cadastro puder ser concluído, você receberá um e-mail de confirmação. Confira também sua caixa de spam.</p>
          <Link to="/sign-in" className="mt-3 inline-block font-semibold text-navy underline">Ir para login</Link>
        </div>
      ) : (
        <>
          <GoogleSignIn pending={pending} setPending={setPending} setError={setError} />
          <CredentialsForm
            email={email}
            password={password}
            onEmailChange={setEmail}
            onPasswordChange={setPassword}
            onSubmit={handleSubmit}
            passwordAutoComplete="new-password"
            passwordMinLength={6}
            submitLabel="Criar conta"
            pending={pending}
            error={error}
          />
        </>
      )}
      <p className="mt-6 text-sm">
        Já tem uma conta? <Link to="/sign-in" className="font-semibold text-navy underline">Entrar</Link>
      </p>
    </AuthLayout>
  )
}

export default SignUp
