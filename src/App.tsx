
import HeroSection from './components/apresentacao/HeroSection'
import SiteHeader from './components/cabecalho/SiteHeader'
import HowItWorksSection from './components/como-funciona/HowItWorksSection'
import ExamplesSection from './components/exemplos/ExamplesSection'
import FaqSection from './components/perguntas-frequentes/FaqSection'
import Footer from './components/rodape/Footer'

const App = () => {
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
