import React from 'react'
import './projects.css'
import { motion } from "framer-motion";
// local images
import ecommerceImg from '../../assets/landing-page.jpg'
import chatbot from '../../assets/chatbot.jpg'
import ToDoListImg from '../../assets/to-do-list.jpg'
import onlineCartImg from '../../assets/online shopping.jpg'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"},
  }),
};

const projectData = [
  {
    title: "To-Do-List app",
    description: "A simple and efficient To-Do List application built using React JS. Users can add, delete, and mark tasks as completed. The app uses React state management for dynamic updates and offers a clean, minimal UI. Tasks persist during the session using local state ",
    image: ToDoListImg,
    github: "https://github.com/teja-reddy21/To-Do-app",

  },
  {
    title: "E-commerce Store",
    description: "e-commerce store built using React JS and  shopping site with cart functionality. Users can browse products, add items to their cart",
    image: onlineCartImg,
    github: "https://github.com/teja-reddy21/shopping-cart",
  
  },
  {
    title: "Chatbot Negotiation",
    description: "A Chatbot Negotiation System is an intelligent conversational interface integrated into an e-commerce platform that allows users to negotiate the price of a product in real time. Instead of fixed pricing, the system simulates human-like bargaining behavior using predefined logic or AI models.",
    image: chatbot,
    github:"https://github.com/teja-reddy21/chatbot-negotiation",

  },
  {
     title: "E-commerce page",
    description: "A responsive and modern e-commerce landing page designed to showcase featured products, promotional offers, and brand identity. Built using React JS and custom CSS.",
    image: ecommerceImg,
    github: "https://github.com/teja-reddy21/page-loading",
   
  }
];




const Projects = () => {

  return (
     <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projectData.map((project, index) => (
        
      <motion.div
  className="project-card"
  key={index}
  custom={index}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>

            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
             
            </div>
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
