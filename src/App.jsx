import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Experience, Tech, Works, Feedbacks, Contact, StarsCanvas, Socials } from "./components"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Socials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
