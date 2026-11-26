// Configurações de formulário para autenticação (sign in e sign up)
import { zodResolver } from '@hookform/resolvers/zod'
import type { UseFormProps } from 'react-hook-form'
import { signInSchema, signUpSchema, type SignInValues, type SignUpValues } from './authSchemas'

const signInDefaultValues: SignInValues = {
  email: '',
  password: '',
}

const signUpDefaultValues: SignUpValues = {
  fullName: '',
  email: '',
  password: '',
}

export const signInFormConfig: UseFormProps<SignInValues> = {
  resolver: zodResolver(signInSchema),
  defaultValues: signInDefaultValues,
  mode: 'onBlur',
  reValidateMode: 'onChange',
}

export const signUpFormConfig: UseFormProps<SignUpValues> = {
  resolver: zodResolver(signUpSchema),
  defaultValues: signUpDefaultValues,
  mode: 'onBlur',
  reValidateMode: 'onChange',
}
