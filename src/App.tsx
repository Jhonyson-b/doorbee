
import HeroSection from './components/apresentacao/HeroSection'
import SiteHeader from './components/cabecalho/SiteHeader'
import HowItWorksSection from './components/como-funciona/HowItWorksSection'
import ExamplesSection from './components/exemplos/ExamplesSection'
import FaqSection from './components/perguntas-frequentes/FaqSection'
import Footer from './components/rodape/Footer'
import AuthCallback from './auth/AuthCallback'
import { useSearchParams } from 'react-router'



const App = () => {
  const [searchParams] = useSearchParams()
  if (searchParams.get('auth_callback') === '1') return <AuthCallback />

  return (
    <>
      <SiteHeader />
      <HeroSection />
      <HowItWorksSection />
      <ExamplesSection />
      <FaqSection />
      <Footer />
    </>
  )
}

export default App
