import { useEffect, useState, type ReactNode } from 'react'
import { supabase } from '../lib/supabase'
import { AuthContext, type AuthState } from './AuthContext'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<AuthState>({
    session: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    let active = true
    let changed = false
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (active && event !== 'INITIAL_SESSION') {
        changed = true
        setAuth({ session, loading: false, error: null })
      }
    })

    const loadSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) throw error
        if (active && !changed) {
          setAuth({ session: data.session, loading: false, error: null })
        }
      } catch (error) {
        console.error('Erro ao carregar a sessão:', error)
        if (active && !changed) {
          setAuth({ session: null, loading: false, error: 'Não foi possível carregar sua sessão. Atualize a página e tente novamente.' })
        }
      }
    }

    void loadSession()
    return () => {
      active = false
      subscription.unsubscribe()
    }
  }, [])

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthProvider
