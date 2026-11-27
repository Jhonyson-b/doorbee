// Direciona o usuário para a criação ou para o painel conforme sua página.
import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'
import Button from '../components/button/Button'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

type PageStatus = {
  userId: string
  hasPage: boolean | null
  error: string | null
}

const PageRoute = ({ requiresPage }: { requiresPage: boolean }) => {
  const { session } = useAuth()
  const userId = session?.user.id
  const [status, setStatus] = useState<PageStatus | null>(null)
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    if (!userId) return
    let active = true

    const loadPage = async () => {
      try {
        const { data, error } = await supabase.from('pages').select('id').eq('user_id', userId).maybeSingle()
        if (error) throw error
        if (active) setStatus({ userId, hasPage: data !== null, error: null })
      } catch (error) {
        console.error('Erro ao consultar a página:', error)
        if (active) setStatus({ userId, hasPage: null, error: 'Não foi possível consultar sua página. Tente novamente.' })
      }
    }

    void loadPage()
    return () => { active = false }
  }, [userId, attempt])

  if (!userId || !status || status.userId !== userId) return <p className="p-8" role="status">Consultando sua página...</p>
  if (status.error) {
    return (
      <div className="p-8">
        <p role="alert">{status.error}</p>
        <Button className="mt-4 px-5 py-2" onClick={() => { setStatus(null); setAttempt((value) => value + 1) }}>Tentar novamente</Button>
      </div>
    )
  }
  if (requiresPage && !status.hasPage) return <Navigate to="/create-page" replace />
  if (!requiresPage && status.hasPage) return <Navigate to="/dashboard" replace />
  return <Outlet />
}

export default PageRoute
