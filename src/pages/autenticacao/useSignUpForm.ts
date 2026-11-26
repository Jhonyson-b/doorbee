// Hook que disponibiliza o formulário de cadastro configurado.
import { useForm } from 'react-hook-form'
import { signUpFormConfig } from './authFormConfig'
import type { SignUpValues } from './authSchemas'

export const useSignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpValues>(signUpFormConfig)

  return { register, handleSubmit, errors }
}
