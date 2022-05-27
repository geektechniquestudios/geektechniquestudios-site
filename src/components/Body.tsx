import { Footer } from "./Footer"
import { Intro } from "./Intro"
import ProjectCard from "./ProjectCard"

type Props = {}

export const Body: React.FC<Props> = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-4xl grow flex-col gap-3 bg-zinc-900 px-10">
        <Intro />
        <ProjectCard
          title="ChessWager"
          codeHref="https://github.com/geektechniquestudios/ChessWager"
          videoHref="https://youtu.be/YG4CmSdyx3Y"
          topImage="chessWager.png"
          description="Betting on chess games might not seem particularly significant superficially, but this platform is an early testbed for developing a generalized API-driven betting service that uses smart contracts for payment. There is no human step in the process of paying users. Payment services are entirely driven by APIs and smart contracts. That means users are paid instantly after the conditions of their bet close. We never even have to possess users' funds due to our smart contracts."
          description2="People often think of blockchains as slow. Existing solutions for betting on real-time events are rarely fast. Contemporary services like the prediction market at pancakeswap can take more than a minute to pay. They also require a second transaction from the user to claim funds. Our solution consistently takes less than 5 seconds and doesn't require any interaction from the user to receive payment."
        />
        <ProjectCard
          title="Pi Smart Thermostat"
          codeHref="https://github.com/geektechniquestudios/RPI-Retrofit-Smart-Thermostat"
          topImage="thermostat.jpg"
          description="Everyone hates waking up in the middle the night because it's too hot or cold. The walk to the thermostat is the worst. Why not buy one? Well, this was more fun. It'd be trivial to build any ReST service on top what I already have. Not to mention the satisfaction I get from seeing a 90's piece of technology respond to my phone over a network."
        />
        <ProjectCard
          title="Automated YouTube"
          codeHref="https://github.com/geektechniquestudios/YouTube-Automator"
          videoHref="https://www.youtube.com/watch?v=AjIRlGG11BY"
          topImage="chessChannel.jpg"
          description="This project takes a database of master level chess games and creates videos from that information, uploading 5 videos every day to YouTube. The resulting statitics are pleasantly surprising. Especially considering this is only a proof of concept, I was doubtful people would be willing to watch such obviously automated content."
        />
        <ProjectCard
          title="Front Door Assistant"
          codeHref="https://github.com/geektechniquestudios/FrontDoorSensor"
          videoHref="https://www.youtube.com/watch?v=LjEhM52aX-M"
          topImage="doorman.jpg"
          description="As a personal interest project, I mounted a display by my front door to show me the weather and my calendar. Its powered with a raspberry pi. I added sensors and a security camera. The Doorman also turns on the lights when someone comes or goes using contextual logic."
        />
        <ProjectCard
          title="Fake Event Viewer"
          codeHref="https://github.com/geektechniquestudios/FakeEventViewer"
          videoHref="https://www.youtube.com/watch?v=JpBYAqYVJxQ&t=7s"
          topImage="fakeeventViewer.jpg"
          description="This vigilante software was designed to mess with scammers that take advantage of the less tech-literate. It even held a top spot on reddit's massive r/programming subreddit for two days with very positive feedback."
        />
        <ProjectCard
          title="Stack Game"
          codeHref="https://github.com/geektechniquestudios/InfinityStack"
          videoHref="https://www.youtube.com/watch?v=jPKpmKMpYws"
          topImage="stackGame.jpg"
          description="This game was built in Unreal Engine 4 using Blueprint scripting and C++. The idea is to build a tower as tall as possible using your timing. Its quite similar to the popluar game 'Stack'."
        />
        <ProjectCard
          title="TimerToDo"
          codeHref="https://github.com/geektechniquestudios/TimerToDo"
          videoHref="https://www.youtube.com/watch?v=OVsIRyGBInU"
          topImage="timerToDo.jpg"
          description="This is a functional responsibility manager that could be used to break up work in an office or help coordinate a team of people. It was made using JavaFX, MySQL, and JDBC."
        />
        <ProjectCard
          title="NAPA Auto Parts Pricing Engine"
          topImage="napa.jpg"
          description="A solo assignment was given to me to design and build a pricing engine to handle a myriad of situations, accepting requests from xml SOAP and json ReST sources. The project relied on a Cassandra database that I also populated in an ETL process."
        />
        <ProjectCard
          title="At&t Cricket Wireless Customer Journey"
          topImage="attCricket.jpg"
          description="A software suite was designed to allow users and customer representatives to perform account management actions including payments and administration. It was built using Java, Spring Boot, Cassandra, React, Redis, and MySQL. This collection of services was deployed to multiple environments on At&t's Code Cloud, Jenkins, Kubernets deployment pipeline. In addition to designing much of the code, I maintained documentation regarding this platform."
        />
        <p className="mx-4 flex justify-end text-zinc-300">Terry Dorsey</p>
        <p className="mx-4 flex justify-end text-zinc-300">
          geektechniquestudios@gmail.com
        </p>
        <p className="mx-4 flex justify-end text-zinc-300">(470) 234-8330</p>
        <Footer />
      </div>
    </div>
  )
}
