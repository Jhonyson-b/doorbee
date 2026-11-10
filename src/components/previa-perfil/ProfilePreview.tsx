type ProfilePreviewProps = {
  name: string
  handle: string
  links: string[]
}

const ProfilePreview = ({ name, handle, links }: ProfilePreviewProps) => {
  return (
    <div className="mx-auto w-full max-w-xs rounded-[2.5rem] border-8 border-navy bg-white p-6 shadow-2xl">
      <div className="flex flex-col items-center text-center">
        <div
          aria-hidden="true"
          className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-soft font-heading text-3xl font-bold text-navy"
        >
          {name.charAt(0)}
        </div>
        <p className="mt-3 font-heading text-lg font-bold text-navy">{name}</p>
        <p className="text-sm text-slate">{handle}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {links.map((link) => (
          <li
            key={link}
            className="rounded-full bg-sky-light px-4 py-3 text-center text-sm font-semibold text-navy"
          >
            {link}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-center text-xs text-slate">feito com Doorbee 🐝</p>
    </div>
  )
}

export default ProfilePreview
