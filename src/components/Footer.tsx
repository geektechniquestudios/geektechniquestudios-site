import { SocialLink } from "./SocialLink"
import {
  BsGithub,
  BsStackOverflow,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs"

type Props = {}

export const Footer: React.FC<Props> = () => {
  return (
    <div className="mt-6 flex h-14 items-center justify-evenly">
      <SocialLink
        href="https://www.linkedin.com/in/terry-dorsey-0a51b5187/"
        icon={<BsLinkedin />}
      />
      <SocialLink
        href="https://github.com/geektechniquestudios"
        icon={<BsGithub />}
      />
      <SocialLink
        href="https://stackoverflow.com/users/9634620/geektechnique"
        icon={<BsStackOverflow />}
      />
      <SocialLink
        href="https://www.youtube.com/channel/UCiKB8a8J0PXB67s_P-jXuJQ?view_as=subscriber"
        icon={<BsYoutube />}
      />
    </div>
  )
}
