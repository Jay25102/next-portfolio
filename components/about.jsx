import React from 'react'

const About = () => {
  return (
    // in mobile view make the about me text and section verticle instead of horizontle
    <div className='flex h-full w-full items-center flex-nowrap justify-around'>
        <div className='section-text text-6xl font-semibold text-orange-cust'>About Me</div>
        <div className='about-me-section'>
            <div className='about-me-title text-3xl'>Nice to meet you! I'm Jason,</div>
            {/* come back and fill this out later */}
            <p>
              a passionate web developer that works in both the front-end and back-end.
              With a Bachelor's in Computer Science and a certification in software engineering,
              I bring a strong technical foundation to the team.
            </p>
        </div>
        
    </div>
  )
}

export default About;