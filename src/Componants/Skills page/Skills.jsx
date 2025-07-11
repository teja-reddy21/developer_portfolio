import React from 'react'
import './skills.css'

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
      <h2>Skills</h2>
      <ul className="skill-list">
       {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
            <span>{skill.name}</span>
            </li>
       ))}
      </ul>
    </section>
  )
}

export default Skills
