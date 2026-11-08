import ProfilePreview from './ProfilePreview'

const linkTypes = [
  'WhatsApp',
  'Outros Instagrams',
  'Sua loja online',
  'Endereço no mapa',
  'Músicas e Spotify',
  'Agendamento',
]

const previewLinks = [
  'Ouvir no Spotify',
  'Novo clipe no YouTube',
  'Agenda de shows',
  'Contato para shows',
]

const HeroSection = () => {
  return (
    <section className="bg-linear-to-br from-mist via-sky-light to-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-sky px-4 py-2 text-sm font-semibold uppercase tracking-wide text-navy">
            Link na bio, do seu jeito
          </span>

          <h1 className="mt-6 text-5xl leading-tight sm:text-6xl">
            Uma porta só para <span className="text-gold-hover">todos os seus links</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg">
            O Doorbee é o gerador de link para a sua bio do Instagram. Organize WhatsApp, outros
            perfis, lojas, endereço, músicas e agendamentos em uma página com a sua identidade
            visual.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#como-funciona"
              className="rounded-full bg-gold px-7 py-3 font-semibold text-navy transition-colors hover:bg-gold-hover"
            >
              Começar grátis
            </a>
            <a
              href="#exemplos"
              className="rounded-full border-2 border-navy px-7 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Ver exemplos
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {linkTypes.map((type) => (
              <li
                key={type}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate"
              >
                {type}
              </li>
            ))}
          </ul>
        </div>

        <ProfilePreview name="MC Rafa Beat" handle="@rafabeat" links={previewLinks} />
      </div>
    </section>
  )
}

export default HeroSection
