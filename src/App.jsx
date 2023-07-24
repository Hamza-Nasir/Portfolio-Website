import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, Hero, About, Experience, Tech, Works, Contact, StarsCanvas, Socials } from "./components"

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <Hero />
        </div> 
        <Experience />
        <Tech />
        <Works />
        <Socials />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <StarsCanvas />

      </div> 
    </BrowserRouter>
  )
}

export default App
