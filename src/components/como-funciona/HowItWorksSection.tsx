import Pricing from './Pricing'

const steps = [
  {
    number: '01',
    title: 'Escolha seu plano',
    description: 'Comece grátis ou desbloqueie recursos premium com o plano Pro.',
  },
  {
    number: '02',
    title: 'Personalize sua página',
    description: 'Envie sua logo, escolha cores e fontes. Fica com a sua cara.',
  },
  {
    number: '03',
    title: 'Adicione seus links',
    description: 'WhatsApp, lojas, endereço, músicas, agenda… tudo em minutos.',
  },
  {
    number: '04',
    title: 'Cole na sua bio',
    description: 'Copie seu link doorbee.com/voce e cole no Instagram. Pronto!',
  },
]

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Como adquirir o seu Doorbee</h2>
          <p className="mt-4 text-lg">
            Em quatro passos simples, sua bio ganha uma porta de entrada profissional.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description }) => (
            <li key={number} className="rounded-2xl bg-mist p-6">
              <span className="font-heading text-4xl font-bold text-gold-hover">{number}</span>
              <h3 className="mt-3 text-xl">{title}</h3>
              <p className="mt-2">{description}</p>
            </li>
          ))}
        </ol>

        <Pricing />
      </div>
    </section>
  )
}

export default HowItWorksSection
