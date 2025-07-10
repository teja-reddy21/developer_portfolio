import React from 'react'
import './projects.css'
const Projects = () => {
  return (
     <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Built using React JS and custom CSS.</p>
        </div>
        <div className="project-card">
          <h3>E-commerce Store</h3>
          <p>React + Firebase-based shopping site with cart functionality.</p>
        </div>
        {/* Add more cards */}
      </div>
    </section>
  )
}

export default Projects
