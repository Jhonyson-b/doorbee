import { useId, useState } from 'react'

const questions = [
  {
    question: 'O Doorbee é gratuito?',
    answer:
      'Sim! Há um plano gratuito com os recursos essenciais. O plano Pro libera temas exclusivos, estatísticas e domínio próprio.',
  },
  {
    question: 'Quantos links posso adicionar?',
    answer:
      'No plano grátis, você pode adicionar até 5 links. Com o plano Pro, pode adicionar links ilimitados.',
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

type FaqItemProps = {
  question: string
  answer: string
  initiallyOpen: boolean
}

const FaqItem = ({ question, answer, initiallyOpen }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const answerId = useId()

  return (
    <div className="py-5">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between gap-4 text-left font-semibold text-navy"
      >
        <span>{question}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-xl text-gold-hover motion-safe:transition-transform motion-safe:duration-300 ${isOpen ? 'rotate-45' : ''}`}
        >
          +
        </span>
      </button>
      <div
        id={answerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid motion-safe:transition-[grid-template-rows,opacity] motion-safe:duration-300 motion-safe:ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="mt-4 pr-8 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

const FaqSection = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Perguntas frequentes</h2>
        </div>

        <div className="mt-10 divide-y divide-sky-light rounded-2xl border border-sky-light px-6">
          {questions.map(({ question, answer }, index) => (
            <FaqItem
              key={question}
              question={question}
              answer={answer}
              initiallyOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
