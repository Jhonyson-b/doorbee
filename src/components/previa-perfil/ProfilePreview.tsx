import coffeeBackground from "../../assets/images/grao-de-cafe.png";
import artistExampleBackground from "../../assets/images/violao-artist-bg.png";
import singerBackground from "../../assets/images/pedestal-artist-bg.png";

const variants = {
  default: {
    card: "border-navy bg-white",
    link: "bg-sky-light text-navy",
  },
  salon: {
    card: "border-salon-orange-dark bg-salon-cream bg-linear-to-b from-salon-cream via-salon-amber to-salon-orange",
    link: "bg-salon-cream text-navy",
  },
  artist: {
    card: "border-artist-deep bg-artist-dark",
    link: "bg-artist-light text-artist-deep",
  },
  singer: {
    card: "border-singer-deep bg-singer-dark",
    link: "bg-singer-light text-singer-deep",
  },
  coffee: {
    card: "border-coffee-roast bg-coffee-cream",
    link: "bg-coffee-cream text-coffee-espresso",
  },
};

type ProfilePreviewProps = {
  name: string;
  handle: string;
  links: readonly string[];
  image?: string;
  variant?: keyof typeof variants;
};

const ProfilePreview = ({
  name,
  handle,
  links,
  image,
  variant = "default",
}: ProfilePreviewProps) => {
  const styles = variants[variant];

  return (
    <div
      className={`mx-auto w-full max-w-xs rounded-[2.5rem] border-8 p-6 shadow-2xl bg-cover bg-center bg-no-repeat ${styles.card}`}
      style={
        variant === "coffee"
          ? {
              backgroundImage: `linear-gradient(
            color-mix(in srgb, var(--color-coffee-cream) 80%, transparent) 0%,
            color-mix(in srgb, var(--color-coffee-caramel) 60%, transparent) 50%,
            color-mix(in srgb, var(--color-coffee-bean) 65%, transparent) 100%
          ), url("${coffeeBackground}"), linear-gradient(
            var(--color-coffee-cream) 0%,
            var(--color-coffee-caramel) 50%,
            var(--color-coffee-roast) 100%
          )`,
            }
          : variant === "artist"
            ? {
                backgroundImage: `linear-gradient(
            color-mix(in srgb, var(--color-artist-dark) 80%, transparent) 0%,
            color-mix(in srgb, var(--color-artist-blue) 70%, transparent) 50%,
            color-mix(in srgb, var(--color-artist-deep) 85%, transparent) 100%
          ), url("${artistExampleBackground}"), linear-gradient(
            var(--color-artist-slate) 0%,
            var(--color-artist-blue) 50%,
            var(--color-artist-deep) 100%
          )`,
              }
            : variant === "singer"
              ? {
                  backgroundImage: `linear-gradient(
            color-mix(in srgb, var(--color-singer-dark) 60%, transparent) 0%,
            color-mix(in srgb, var(--color-singer-purple) 45%, transparent) 50%,
            color-mix(in srgb, var(--color-singer-deep) 70%, transparent) 100%
          ), url("${singerBackground}"), linear-gradient(
            var(--color-singer-dark) 0%,
            var(--color-singer-purple) 50%,
            var(--color-singer-deep) 100%
          )`,
                }
              : undefined
      }
    >
      <div className="flex flex-col items-center text-center">
        {image ? (
          <img
            src={image}
            alt={`Foto de perfil de ${name}`}
            className="h-20 w-20 rounded-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`flex h-20 w-20 items-center justify-center rounded-full font-heading text-3xl font-bold ${
              variant === "coffee"
                ? "bg-coffee-bean text-coffee-cream"
                : variant === "salon"
                  ? "bg-salon-cream text-navy"
                  : variant === "artist"
                    ? "bg-artist-muted text-artist-deep"
                    : variant === "singer"
                      ? "bg-singer-light text-singer-deep"
                      : "bg-gold-soft text-navy"
            }`}
          >
            {name.charAt(0)}
          </div>
        )}

        <p
          className={`mt-3 font-heading text-lg font-bold ${variant === "coffee" ? "text-coffee-espresso" : variant === "artist" ? "text-artist-light" : variant === "singer" ? "text-singer-light" : "text-navy"}`}
        >
          {name}
        </p>
        <p className={`text-sm ${variant === "coffee" ? "text-coffee-roast" : variant === "artist" ? "text-artist-light" : variant === "singer" ? "text-singer-light" : variant === "salon" ? "text-navy" : "text-slate"}`}>
          {handle}
        </p>
      </div>

      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li
            key={link}
            className={`rounded-full px-4 py-3 text-center text-sm font-semibold ${styles.link}`}
          >
            {link}
          </li>
        ))}
      </ul>

      <p
        className={`mt-6 text-center text-xs ${variant === "coffee" ? "text-coffee-cream" : variant === "artist" ? "text-artist-light" : variant === "singer" ? "text-singer-light" : variant === "salon" ? "text-navy" : "text-slate"}`}
      >
        feito com Doorbee 🐝
      </p>
    </div>
  );
};

export default ProfilePreview;
