type Props = {
  href: string
  icon: React.ReactNode
}

export const SocialLink: React.FC<Props> = ({ href, icon }) => {
  return (
    <a
      className="rounded-full border border-gray-600 grid place-content-center w-6 h-6"
      href={href}
    >
      {icon}
    </a>
  )
}
