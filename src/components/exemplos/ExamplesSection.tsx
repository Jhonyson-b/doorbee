import ProfilePreview from "../previa-perfil/ProfilePreview";
import avatarSalaoDeBeleza from "../../assets/images/salao-de-beleza-avatar-mockup.jpeg";
import avatarArtista from "../../assets/images/cantora-avatar-mockup.jpeg";
import avatarCafeteria from "../../assets/images/cafeteria-avatar-mockup.jpeg";

const examples = [
  {
    name: "Studio Ana Lima",
    handle: "@studioanalima",
    links: [
      "Agendar horário",
      "WhatsApp",
      "Nosso endereço",
      "Catálogo de serviços",
    ],
    category: "Salão de beleza",
    image: avatarSalaoDeBeleza,
    variant: "salon",
  },
  {
    name: "Rafa Guimarães",
    handle: "@rafaguimmm_",
    links: [
      "Ouvir no Spotify",
      "Novo clipe no YouTube",
      "Agenda de shows",
      "Contato para shows",
    ],
    category: "Artista",
    image: avatarArtista,
    variant: "artist",
  },
  {
    name: "Café da Vila",
    handle: "@cafedavila",
    links: ["Cardápio", "Pedir no iFood", "Como chegar", "Instagram da filial"],
    category: "Cafeteria",
    image: avatarCafeteria,
    variant: "coffee",
  },
]as const;

const ExamplesSection = () => {
  return (
    <section id="exemplos" className="scroll-mt-20 bg-sky-light">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl">Doorbee em ação</h2>
          <p className="mt-4 text-lg">
            Cada página com a identidade de quem usa.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {examples.map(({ name, handle, links, category, image, variant }) => (
            <article
              key={handle}
              className="flex flex-col items-center rounded-3xl bg-white px-5 py-8"
            >
              <ProfilePreview
                name={name}
                handle={handle}
                links={links}
                image={image}
                variant={variant}
              />
              <p className="mt-5 font-semibold text-navy">{category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
