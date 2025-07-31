import React from 'react'
import './about.css'
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};


const About = () => {
  return (
    <section id="about" className="about">
       <motion.section
      id="about"
      className="about"
      variants={aboutVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }} // 👈 plays every time in view
    >
      <h3>LET  ME  INTRODUCE  MYSELF</h3>
      <h2>About Me</h2>
      <p>
        "I'm a passionate frontend developer with a strong foundation in React JS and modern web technologies. I enjoy transforming ideas into user-friendly, responsive web applications that deliver great user experiences. My expertise lies in building scalable and clean interfaces using JavaScript, HTML, CSS, and React.
I'm always curious about new tools and frameworks, and I enjoy continuously learning to stay updated with industry trends. Whether it's optimizing performance, improving accessibility, or refining UI/UX, I focus on writing clean, maintainable code.
When I'm not coding, I love exploring open-source projects, watching tech tutorials, and experimenting with new designs. I’m looking forward to working on exciting projects and collaborating with creative minds in the tech world."
      </p>
      <div className="education">
        <h3>🎓 Education</h3>

        <ul>
          <li>
            <strong>Bachelor of Technology (B.Tech)</strong><br />
            Computer Science at Sri Venkateshwara College of Engineering, Kadapa.<br />
            2021 – 2025
          </li>
           </ul>
      </div>
       <a href='/Teja_web_developer.pdf' download className='resume-btn'>Download Resume</a>
       </motion.section>
    </section>
  )
}

export default About
