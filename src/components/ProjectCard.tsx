type Props = {
  title: string
  codeHref?: string
  videoHref?: string
  topImage: string
  description: string
}

const ProjectCard: React.FC<Props> = ({
  topImage,
  description,
  title,
  codeHref,
  videoHref,
}) => {
  return (
    <div className="m-1.5 rounded-lg border border-white bg-zinc-800">
      <div className="flex items-center justify-center rounded-t-lg bg-zinc-700 py-2 text-xl text-zinc-300">
        {title}
      </div>
      <div className="gap-3 p-4 md:flex">
        <div className="md:w-1/2">
          <img
            className="rounded-lg border border-zinc-600 bg-zinc-600"
            src={`src/images/${topImage}`}
          />
        </div>
        <div className="my-2 flex grow flex-col justify-between rounded-b-lg text-zinc-300 md:w-1/2">
          <p>{description}</p>
          <div className="mt-3 flex gap-3">
            {codeHref && (
              <a
                href={codeHref}
                className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-zinc-600 p-1.5 hover:border-zinc-200"
              >
                Source Code
              </a>
            )}
            {videoHref && (
              <a
                href={videoHref}
                className="flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-zinc-600 p-1.5 hover:border-zinc-200"
              >
                Video
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
