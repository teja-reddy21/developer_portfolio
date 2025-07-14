
import React from 'react'
import './socialLinks.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    
      <div className="social-links">
      <a href="https://github.com/teja-reddy21" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/nimmanapalli-teja-780b3a249/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  )
}

export default SocialLinks
