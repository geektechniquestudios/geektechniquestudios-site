import { SocialLink } from "./SocialLink"
import { FaBeer } from "react-icons/fa"

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className="flex h-8 items-center justify-evenly bg-zinc-800">
      <SocialLink href="" icon={<FaBeer />} />
    </div>
  )
}
