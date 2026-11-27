// Regras para o título e o endereço público de uma página.
import { z } from 'zod'

const reservedSlugs = [
  'sign-in', 'sign-up', 'dashboard', 'create-pages', 'create-page', 'admin', 'api', 'go',
  'login', 'logout', 'pricing', 'precos', 'privacy', 'terms', 'settings', 'app', 'www',
  'help', 'suporte',
]

export const pageSchema = z.object({
  title: z.string().trim().min(2, 'Informe o nome da página').max(60, 'Máximo de 60 caracteres'),
  slug: z.string().trim().toLowerCase()
    .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Use letras minúsculas, números e hífen')
    .min(3, 'Mínimo de 3 caracteres')
    .max(30, 'Máximo de 30 caracteres')
    .refine((value) => !reservedSlugs.includes(value), 'Esse endereço não está disponível'),
})

export type PageValues = z.infer<typeof pageSchema>
