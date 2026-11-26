// Hook que disponibiliza o formulário de login configurado.
import { useForm } from 'react-hook-form'
import { signInFormConfig } from './authFormConfig'
import type { SignInValues } from './authSchemas'

export const useSignInForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInValues>(signInFormConfig)

  return { register, handleSubmit, errors }
}
