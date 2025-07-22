import React from 'react'
import './home.css'
import profileImg from '../../assets/profile.jpg';
import { motion } from "motion/react"
const Home = () => {
  return (
    <section id="home" className="home">
        <div className='home-content'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.5 },
            }}
            
        >
          <div className='profile-pic-container'>
            <img src={profileImg} alt='Teja Profile' className='profile-pic' />
          </div>
        </motion.div>
        
          
       <div className='text-content'>
      <h1>Hi, I'm Teja</h1>
      <p>Frontend Developer | React JS Enthusiast</p>
     
       </div>
       </div>
    </section>
  );
}

export default Home;
