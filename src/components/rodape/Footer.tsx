const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#" className="inline-flex items-center gap-3" aria-label="Doorbee - início">
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft font-heading text-xl font-bold text-navy"
              >
                D
              </span>
              <span className="font-heading text-2xl font-bold">Doorbee</span>
            </a>
            <p className="mt-4 max-w-xs text-white/80">
              Todos os seus links em uma porta só.
            </p>
          </div>

          <nav aria-label="Links do produto">
            <h2 className="font-sans text-base font-bold text-white">Produto</h2>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a className="transition-colors hover:text-gold-soft" href="#planos">
                  Planos
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gold-soft" href="#exemplos">
                  Exemplos
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gold-soft" href="#como-funciona">
                  Como funciona
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-base font-bold text-white">Contato</h2>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>
                <a
                  className="transition-colors hover:text-gold-soft"
                  href="mailto:contato@doorbee.com"
                >
                  contato@doorbee.com
                </a>
              </li>
              <li>@doorbee</li>
              <li>Fortaleza, CE</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-sm text-white/70">
          © {new Date().getFullYear()} Doorbee. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
