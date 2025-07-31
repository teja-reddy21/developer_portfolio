import React, { useEffect, useState } from 'react';
import './SlideSectionNav.css';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

const SlideSectionNav = () => {
  const [active, setActive] = useState('home');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -50 && rect.top <= window.innerHeight / 2) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="right-nav">
      {sections.map((sec) => (
        <div style={{display:'flex',justifyContent:'right'}}>
      
        {active === sec && <span className="label" style={{color:'pink',paddingRight:'10px'}}>{sec}</span>}
        <label key={sec} className="radio-button">
             
          <input
            type="radio"
            name="section-nav"
            checked={active === sec}
            onChange={() => scrollTo(sec)}
          />
         
        </label>
          </div>
      ))}
    </div>
  );
};

export default SlideSectionNav;
