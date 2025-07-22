import React from 'react'
import './skills.css'
import { motion } from 'framer-motion';
// import skill logos
import reactLogo from '../../assets/icons/react.png'
import jsLogo from '../../assets/icons/js.png'
import html5Logo from '../../assets/icons/html-5.png'
import CssLogo from '../../assets/icons/Web Css.png'
import gitLogo from '../../assets/icons/git.png'
import gitHubLogo  from '../../assets/icons/github.png'
import responsiveLogo from '../../assets/icons/responsive.png'
 
const skills = [
  { name: "React JS", logo: reactLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "HTML5", logo: html5Logo },
  {name: "CSS", logo: CssLogo},
  { name: "Git", logo: gitLogo },
  {name: "GitHub", logo: gitHubLogo},
  { name: "Responsive Design", logo: responsiveLogo }
];

const Skills = () => {
  return (
      <section id="skills" className="skills">
         <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >  Skills</motion.h2>
      <ul className="skill-list">
       {skills.map((skill, index) => (
           <motion.div
            key={index}
            className="skill-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <span>{skill.name}</span>
            </motion.div>
       ))}
      </ul>
    </section>
  )
}

export default Skills
