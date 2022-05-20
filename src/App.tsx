import { Body } from "./components/Body"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <div className="flex h-screen w-screen flex-col bg-zinc-900">
      <div className="absolute top-1 left-1 h-3 w-3 rounded-full border border-black" />
      <Header />
      <Body />
    </div>
  )
}
