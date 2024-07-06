import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import me from "../../assets/mw.png"

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <img src={me} alt="" />
      <h1>I'm <span>Atishsingh kachhaway</span></h1>
      <p>I'm a passionate problem solver & software developer with a deep interest in exploring the world & meeting new people.
I enjoy combining my skills in competitive programming and software development to tackle complex problems.</p>
    <div className="hero-action">
      <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#Footer'>Connect with me</AnchorLink></div>
      <div className="hero-resume">My resume</div>
    </div>
    </div>
  )
}

export default Hero