
import About from "./Componants/About page/About";
import Contact from "./Componants/Contact page/Contact";
import Home from "./Componants/Home page/Home";
import Navbar from "./Componants/Navbar/Navbar";
import Projects from "./Componants/Projects page/Projects";
import Skills from "./Componants/Skills page/Skills";
import './index.css'
import { motion } from "framer-motion";
function App() {
  

  return (
    <>
      <div>
             <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    ></motion.div>
      <Home/>
        <Navbar/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      
      </div>
    </>
  )
}

export default App
