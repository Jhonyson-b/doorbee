// Configuração e acesso ao formulário de criação de página.
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type UseFormProps } from 'react-hook-form'
import { pageSchema, type PageValues } from './pageSchema'

const defaultValues: PageValues = { title: '', slug: '' }

const formConfig: UseFormProps<PageValues> = {
  resolver: zodResolver(pageSchema),
  defaultValues,
  mode: 'onBlur',
  reValidateMode: 'onChange',
}

export const useCreatePageForm = () => useForm<PageValues>(formConfig)
