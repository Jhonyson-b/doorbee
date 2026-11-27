import { Link } from 'react-router'
import { useAuth } from '../../auth/useAuth'
import SignOutButton from '../autenticacao/SignOutButton'

const Dashboard = () => {
  const { session } = useAuth()
  return (
    <main className="min-h-svh bg-mist px-5 py-12">
      <div className="mx-auto max-w-4xl rounded-3xl bg-white p-7 shadow-lg sm:p-10">
        <Link to="/" className="font-heading text-2xl font-bold text-navy">Doorbee</Link>
        <h1 className="mt-8 text-3xl">Seu painel</h1>
        <p className="mt-3">Você entrou como {session?.user.email}.</p>
        <p className="mt-2">Em breve, você poderá configurar seu Doorbee aqui.</p>
        <SignOutButton />
      </div>
    </main>
  )
}

export default Dashboard
