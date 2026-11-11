const variants = {
  default: {
    card: 'border-navy bg-white',
    link: 'bg-sky-light text-navy',
  },
  salon: {
    card: 'border-gold bg-white',
    link: 'bg-gold-soft text-navy',
  },
  artist: {
    card: 'border-navy bg-mist',
    link: 'bg-navy text-white',
  },
  coffee: {
    card: 'border-gold-hover bg-white',
    link: 'bg-mist text-navy',
  },
}

type ProfilePreviewProps = {
  name: string;
  handle: string;
  links: readonly string[];
  image?: string;
  variant?: keyof typeof variants
};

const ProfilePreview = ({
  name,
  handle,
  links,
  image,
  variant = 'default',
}: ProfilePreviewProps) => {
  const styles = variants[variant]

  return (
    <div className={`mx-auto w-full max-w-xs rounded-[2.5rem] border-8 p-6 shadow-2xl ${styles.card}`}>
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
            className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-soft font-heading text-3xl font-bold text-navy"
          >
            {name.charAt(0)}
          </div>
        )}

        <p className="mt-3 font-heading text-lg font-bold text-navy">{name}</p>
        <p className="text-sm text-slate">{handle}</p>
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

      <p className="mt-6 text-center text-xs text-slate">
        feito com Doorbee 🐝
      </p>
    </div>
  );
};

export default ProfilePreview;
