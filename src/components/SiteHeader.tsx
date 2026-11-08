const LogoPlaceholder = () => {
  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft font-heading text-xl font-bold text-navy"
    >
      D
    </span>
  )
}

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-light bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Doorbee - início">
          <LogoPlaceholder />
          <span className="font-heading text-2xl font-bold text-navy">Doorbee</span>
        </a>

        <a
          href="#como-funciona"
          className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-6 sm:text-base"
        >
          Criar meu Doorbee
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
