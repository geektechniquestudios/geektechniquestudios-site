import { Footer } from "./Footer"
import ProjectCard from "./ProjectCard"

type Props = {}

export const Body: React.FC<Props> = () => {
  return (
    <div className="flex grow flex-col overflow-scroll">
      <ProjectCard title="ChessWager" href="" topImage="" description="" />
      <ProjectCard
        title="Pi Smart Thermostat"
        href=""
        topImage="thermostat.jpg"
        description="Everyone hates waking up in the middle the night because it's too hot or cold. The walk to the thermostat is the worst. Why not buy one? Well, this was more fun. It'd be trivial to build any ReST service on top what I already have. Not to mention the satisfaction I get from seeing a 90's piece of technology respond to my phone over a network."
      />
      <ProjectCard
        title="Automated YouTube"
        href=""
        topImage="chessChannel.jpg"
        description="This project takes a database of master level chess games and creates videos from that information, uploading 5 videos every day to YouTube. The resulting statitics are pleasantly surprising. Especially considering this is only a proof of concept, I was doubtful people would be willing to watch such obviously automated content."
      />
      <ProjectCard
        title="Front Door Assistant"
        href=""
        topImage="doorman.jpg"
        description="As a personal interest project, I mounted a display by my front door to show me the weather and my calendar. Its powered with a raspberry pi. I added sensors and a security camera. The Doorman also turns on the lights when someone comes or goes using contextual logic."
      />
      <ProjectCard
        title="Fake Event Viewer"
        href=""
        topImage="fakeeventViewer.jpg"
        description="This vigilante software was designed to mess with scammers that take advantage of the less tech-literate. It even held a top spot on reddit's massive r/programming subreddit for two days with very positive feedback."
      />
      <ProjectCard
        title="Stack Game"
        href=""
        topImage="stackGame.jpg"
        description="This game was built in Unreal Engine 4 using Blueprint scripting and C++. The idea is to build a tower as tall as possible using your timing. Its quite similar to the popluar game 'Stack'."
      />
      <ProjectCard
        title="TimerToDo"
        href=""
        topImage="timerToDo.jpg"
        description="This is a functional responsibility manager that could be used to break up work in an office or help coordinate a team of people. It was made using JavaFX, MySQL, and JDBC."
      />
      <ProjectCard
        title="NAPA Auto Parts Pricing Engine"
        href=""
        topImage="napa.jpg"
        description="A solo assignment was given to me to design and build a pricing engine to handle a myriad of situations, accepting requests from xml SOAP and json ReST sources. The project relied on a Cassandra database that I also populated in an ETL process."
      />
      <ProjectCard
        title="At&t Cricket Wireless Customer Journey"
        href=""
        topImage="attCricket.jpg"
        description="A software suite was designed to allow users and customer representatives to perform account management actions including payments and administration. It was built using Java, Spring Boot, Cassandra, React, Redis, and MySQL. This collection of services was deployed to multiple environments on At&t's Code Cloud, Jenkins, Kubernets deployment pipeline. In addition to designing much of the code, I maintained documentation regarding this platform."
      />
      <Footer />
    </div>
  )
}
