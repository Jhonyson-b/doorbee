import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useLocation } from 'react-router'
import AuthLayout from '../../components/autenticacao/AuthLayout'
import CredentialsFields from '../../components/autenticacao/CredentialsFields'
import GoogleSignIn from '../../components/autenticacao/GoogleSignIn'
import Button from '../../components/button/Button'
import { supabase } from '../../lib/supabase'
import { signInSchema, type SignInValues } from './authSchemas'

const SignIn = () => {
  const location = useLocation()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const callbackError = typeof location.state?.authError === 'string' ? location.state.authError : ''
  const { register, handleSubmit, formState: { errors } } = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '' },
  })

  const signIn = async ({ email, password }: SignInValues) => {
    setError('')
    setPending(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
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
      <form noValidate onSubmit={handleSubmit(signIn)} className="space-y-4">
        <CredentialsFields
          emailRegistration={register('email')}
          passwordRegistration={register('password')}
          emailError={errors.email?.message}
          passwordError={errors.password?.message}
          passwordAutoComplete="current-password"
        />
        {(error || callbackError) && <p role="alert" className="text-sm text-red-700">{error || callbackError}</p>}
        <Button type="submit" disabled={pending} className="w-full px-5 py-3">
          {pending ? 'Aguarde...' : 'Entrar'}
        </Button>
      </form>
      <p className="mt-6 text-sm">
        Ainda não tem uma conta? <Link to="/sign-up" className="font-semibold text-navy underline">Criar conta</Link>
      </p>
    </AuthLayout>
  )
}

export default SignIn
