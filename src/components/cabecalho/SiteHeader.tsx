import logoImage from "../../assets/images/logo-png.png";
import MobileMenu from "../menu-hamburguer/MobileMenu";
import { Link } from "react-router";
import { useAuth } from "../../auth/useAuth";
import ButtonLink from "../button/ButtonLink";

const navigationLinks = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#planos", label: "Planos" },
  { href: "#exemplos", label: "Exemplos" },
  { href: "#faq", label: "FAQ" },
];

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
  const { session } = useAuth();
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

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-navy text-sm font-medium transition-colors duration-200 hover:text-gold-hover"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {session ? (
            <ButtonLink to="/dashboard" variant="navy" className="px-6 py-2.5">Meu painel</ButtonLink>
          ) : (
            <>
              <Link to="/sign-in" className="text-sm font-semibold text-navy">Entrar</Link>
              <ButtonLink to="/sign-up" variant="navy" className="px-6 py-2.5">Criar meu Doorbee</ButtonLink>
            </>
          )}
        </div>

        <MobileMenu links={navigationLinks} />
      </div>
    </header>
  );
};

export default SiteHeader;
