
import About from "./Componants/About page/About";
import Contact from "./Componants/Contact page/Contact";
import Home from "./Componants/Home page/Home";
import Navbar from "./Componants/Navbar/Navbar";
import Projects from "./Componants/Projects page/Projects";
import Skills from "./Componants/Skills page/Skills";
import './index.css'

function App() {
  

  return (
    <>
      <div>
            <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      
      </div>
    </>
  )
}

export default App
