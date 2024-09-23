import About_us from "./Components/About Us/About_us"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Services from "./Components/Services/Services"
import './index.css'

function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About_us />
      <Services />
    </main>
  )
}

export default App
