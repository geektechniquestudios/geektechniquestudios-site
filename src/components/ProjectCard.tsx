type Props = {
  title: string
  href: string
  topImage: string
  description: string
}

const ProjectCard: React.FC<Props> = ({
  topImage,
  description,
  title,
  href,
}) => {
  return (
    <div className="m-1.5 rounded-lg border border-white bg-zinc-800">
      <div className="flex items-center justify-center py-2 text-xl text-zinc-300">
        {title}
      </div>
      <div className="flex-col">
        <a href={href}>
          <img className="bg-zinc-600" src={`src/images/${topImage}`} />
        </a>
        <div className="grow rounded-b-lg p-2 text-zinc-300">{description}</div>
      </div>
    </div>
  )
}

export default ProjectCard
