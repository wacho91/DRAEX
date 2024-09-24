import About_us from "./Components/About Us/About_us"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"
import Services from "./Components/Services/Services"
import './index.css'

function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About_us />
      <Services />
      <Projects />
    </main>
  )
}

export default App
