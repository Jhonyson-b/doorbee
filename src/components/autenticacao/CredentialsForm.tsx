import type { FormEventHandler } from 'react'
import Button from '../button/Button'

type CredentialsFormProps = {
  email: string
  password: string
  onEmailChange: (email: string) => void
  onPasswordChange: (password: string) => void
  onSubmit: FormEventHandler<HTMLFormElement>
  passwordAutoComplete: 'current-password' | 'new-password'
  passwordMinLength?: number
  submitLabel: string
  pending: boolean
  error: string
}

const CredentialsForm = ({
  email, password, onEmailChange, onPasswordChange, onSubmit,
  passwordAutoComplete, passwordMinLength, submitLabel, pending, error,
}: CredentialsFormProps) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <div>
      <label htmlFor="email" className="mb-1 block text-sm font-semibold">E-mail</label>
      <input id="email" type="email" autoComplete="email" required value={email} onChange={(event) => onEmailChange(event.target.value)} className="w-full rounded-xl border border-slate px-4 py-3" />
    </div>
    <div>
      <label htmlFor="password" className="mb-1 block text-sm font-semibold">Senha</label>
      <input id="password" type="password" autoComplete={passwordAutoComplete} required minLength={passwordMinLength} value={password} onChange={(event) => onPasswordChange(event.target.value)} className="w-full rounded-xl border border-slate px-4 py-3" />
      {passwordMinLength && <p className="mt-1 text-sm">Use pelo menos {passwordMinLength} caracteres.</p>}
    </div>
    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    <Button type="submit" disabled={pending} className="w-full px-5 py-3">
      {pending ? 'Aguarde...' : submitLabel}
    </Button>
  </form>
)

export default CredentialsForm
