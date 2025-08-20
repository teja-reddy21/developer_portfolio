import React from 'react'
import './projects.css'
import { motion } from "framer-motion";
// local images
import ecommerceImg from '../../assets/landing-page.jpg'
import chatbot from '../../assets/chatbot.jpg'
import typing_speed from '../../assets/typing speed.jpg'
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
    title: "Typing speed App",
    description: "The Typing Speed Test App is a web application built to help users practice and improve their typing speed and accuracy. It provides an interactive platform where users can test their typing skills by typing randomly generated sentences within a fixed time limit. ",
    image: typing_speed,
    github: "https://github.com/teja-reddy21/typing_test",

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
