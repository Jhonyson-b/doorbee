const plans = [
  {
    name: 'Grátis',
    price: 'R$ 0/mês',
    features: ['Até 10 links', 'Temas básicos', 'Link doorbee.com/voce'],
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 'R$ 19,90/mês',
    features: [
      'Links ilimitados',
      'Identidade visual completa',
      'Estatísticas de cliques',
      'Domínio próprio',
    ],
    highlighted: true,
  },
]

const Pricing = () => {
  return (
    <div id="planos" className="mt-16 scroll-mt-24">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-2xl sm:text-3xl">Um plano para cada momento</h3>
        <p className="mt-3 text-lg">Comece grátis e evolua quando precisar de mais.</p>
      </div>

      <div className="mx-auto mt-8 grid max-w-3xl gap-6 md:grid-cols-2">
        {plans.map(({ name, price, features, highlighted }) => (
          <article
            key={name}
            className={`rounded-2xl border p-6 ${
              highlighted
                ? 'border-navy bg-navy text-white'
                : 'border-sky-light bg-white text-navy'
            }`}
          >
            <h4 className={`font-heading text-2xl font-bold ${highlighted ? 'text-white' : ''}`}>
              {name}
            </h4>
            <p className={`mt-2 text-xl font-semibold ${highlighted ? 'text-white' : 'text-navy'}`}>
              {price}
            </p>
            <ul className="mt-5 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className={highlighted ? 'text-white' : 'text-slate'}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Pricing
