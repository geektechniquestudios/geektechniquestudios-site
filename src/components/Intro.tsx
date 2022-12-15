type Props = {}

export const Intro: React.FC<Props> = () => {
  return (
    <div className="mx-2 flex flex-col gap-4 rounded-b-lg border-l border-r border-b border-slate-700 bg-slate-800 p-6 text-zinc-200">
      <p className="my-2 flex justify-center text-xl font-bold">About Me</p>
      <ul className="pl-3">
        <li>
          • An enthusiastic developer with a deep desire for knowledge and
          efficiency
        </li>
        <li>
          • Experienced in a breadth of languages and tools with many projects
          under my belt
        </li>
        <li>
          • Professional repertoire in full-stack and microservice development
        </li>
        <li>• Background in teamwork and leadership</li>
        <li>
          • Works well under pressure with strong communication skills and an
          urge to keep farming abilities
        </li>
      </ul>
      <p className="text-sm">Below are a few of my favorite projects.</p>
    </div>
  )
}
