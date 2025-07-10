import React from 'react'
import './home.css'
import profileImg from '../../assets/profile.jpg';
const Home = () => {
  return (
    <section id="home" className="home">
        <div className='home-content'>
          <div className='profile-pic-container'>
            <img src={profileImg} alt='Teja Profile' className='profile-pic' />
          </div>
       <div className='text-content'>
      <h1>Hi, I'm Teja</h1>
      <p>Frontend Developer | React JS Enthusiast</p>
      <a href='/web developer.pdf' download className='resume-btn'>Download Resume</a>
       </div>
       </div>
    </section>
  );
}

export default Home;
