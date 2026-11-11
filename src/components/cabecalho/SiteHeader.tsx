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

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-sky-light bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Doorbee - início"
        >
          <Logo />
          <span className="font-heading text-2xl font-bold text-navy">
            Doorbee
          </span>
        </a>

        <div className="flex items-center gap-7">
          <a
            href="#como-funciona"
            className="text-navy text-sm font-medium transition-colors duration-200 hover:text-gold-hover"
          >
            Como funciona
          </a>

          <a
            href="#planos"
            className="text-navy text-sm font-medium transition-colors duration-200 hover:text-gold-hover"
          >
            Planos
          </a>

          <a
            href="#exemplos"
            className="text-navy text-sm font-medium transition-colors duration-200 hover:text-gold-hover"
          >
            Exemplos
          </a>

          <a
            href="#faq"
            className="text-navy text-sm font-medium transition-colors duration-200 hover:text-gold-hover"
          >
            FAQ
          </a>

        </div>

        <a
            href="#"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-6 sm:text-base"
          >
            Criar meu Doorbee
          </a>
      </div>
    </header>
  );
};

export default SiteHeader;
