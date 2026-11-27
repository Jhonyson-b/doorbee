import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import App from './App.tsx'
import AuthProvider from './auth/AuthProvider'
import ProtectedRoute from './auth/ProtectedRoute'
import PageRoute from './auth/PageRoute'
import SignIn from './pages/autenticacao/SignIn'
import SignUp from './pages/autenticacao/SignUp'
import Dashboard from './components/painel/Dashboard'
import CreatePage from './pages/criacao-paginas/CreatePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<PageRoute key="create-page" requiresPage={false} />}>
              <Route path="/create-page" element={<CreatePage />} />
            </Route>
            <Route element={<PageRoute key="dashboard" requiresPage />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
