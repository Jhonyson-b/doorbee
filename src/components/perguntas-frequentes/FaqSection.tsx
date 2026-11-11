const questions = [
  {
    question: 'O Doorbee é gratuito?',
    answer:
      'Sim! Há um plano gratuito com os recursos essenciais. O plano Pro libera temas exclusivos, estatísticas e domínio próprio.',
  },
  {
    question: 'Quantos links posso adicionar?',
    answer:
      'No plano grátis, você pode adicionar até 10 links. Com o plano Pro, pode adicionar links ilimitados.',
  },
  {
    question: 'Consigo usar minhas cores e minha logo?',
    answer:
      'Sim. O plano Pro permite personalizar a identidade visual da sua página com suas cores e sua logo. No plano grátis, você pode escolher entre temas básicos.',
  },
  {
    question: 'Posso ver quantas pessoas clicam?',
    answer:
      'Sim. O plano Pro inclui estatísticas para acompanhar os cliques nos seus links.',
  },
  {
    question: 'Funciona só no Instagram?',
    answer:
      'Não. Você pode compartilhar seu link Doorbee em qualquer lugar: outras redes sociais, mensagens, cartões digitais ou onde quiser.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Perguntas frequentes</h2>
        </div>

        <div className="mt-10 divide-y divide-sky-light rounded-2xl border border-sky-light px-6">
          {questions.map(({ question, answer }, index) => (
            <details key={question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy marker:content-none">
                <span>{question}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-gold-hover transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-8 leading-relaxed">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
