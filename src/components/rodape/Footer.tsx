import logoImage from "../../assets/images/logo-png.png";

const Logo = () => {
  return (
    <img
      src={logoImage}
      alt="Logo Doorbee"
      className="h-11 w-auto object-contain"
    />
  );
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-16">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <a href="#" className="inline-flex items-center gap-3" aria-label="Doorbee - início">
              <Logo />
              <span className="font-heading text-2xl font-bold">Doorbee</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/80">
              Uma porta de entrada para todos os seus links.
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
              <li>João Pessoa, PB</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 pt-6 pb-12 text-sm text-white/70 sm:px-8 lg:pb-16 flex justify-center">
          © {new Date().getFullYear()} Doorbee. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
