import { useId, useRef, useState } from "react";

type MobileMenuProps = {
  links: readonly { href: string; label: string }[];
};

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className="md:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          closeMenu();
          buttonRef.current?.focus();
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-lg text-navy"
      >
        <span aria-hidden="true" className="relative flex h-6 w-6 items-center justify-center">
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
              isOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
              isOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </span>
      </button>

      <nav
        id={menuId}
        aria-label="Navegação principal"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`absolute top-full right-0 left-0 grid border-b border-sky-light bg-white shadow-lg transition-[grid-template-rows,opacity] ease-in-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr] opacity-100 duration-300" : "grid-rows-[0fr] opacity-0 duration-600"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className="block py-3 text-sm font-medium text-navy transition-colors duration-200 hover:text-gold-hover"
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              onClick={closeMenu}
              className="mt-3 block rounded-full bg-navy px-5 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Criar meu Doorbee
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
