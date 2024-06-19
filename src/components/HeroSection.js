import React from 'react'
import './HeroSection.css';
import '../App.css'
function HeroSection() {
  return (
    <div className="hero-container">
        <h1> Adventure Awaits </h1>
        <p> What are you waiting for? </p>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'> Watch Trailer <i className='far fa-play-circle'> </i>

            </Button>
    </div>
  )
}

export default HeroSection