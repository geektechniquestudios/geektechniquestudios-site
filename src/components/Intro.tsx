type Props = {}

export const Intro: React.FC<Props> = () => {
  return (
    <div className="p-6 text-zinc-200 gap-4 flex flex-col">
      <p className="my-2 text-xl font-bold">About Me</p>
      <p>
        A fast-learning and talented developer with a deep desire for knowledge
        and efficiency. Experienced in a breadth of languages and tools with
        many projects under my belt. Professional repertoire in full-stack and
        microservice development. Background in teamwork and leadership, works
        well under pressure with strong communication skills and an urge to keep
        farming abilities.
      </p>
      <p>Below are just a few of my favorite projects.</p>
    </div>
  )
}
