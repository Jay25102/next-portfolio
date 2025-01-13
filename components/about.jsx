import React from 'react'

const About = () => {
  return (
    // in mobile view make the about me text and section verticle instead of horizontle
    <div className='flex h-full w-full items-center flex-nowrap justify-around'>
        <div className='about-me-text text-6xl font-semibold text-orange-cust'>About Me</div>
        <div className='about-me-section'>
            <div className='about-me-title text-3xl'>Programmer | Web Designer | Software Engineer</div>
            {/* come back and fill this out later */}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo corrupti fugiat error qui dolores! Aliquam, autem dolorem. Iste modi atque, est, numquam quam quae praesentium illum officia optio, explicabo veniam!</p>
        </div>
        
    </div>
  )
}

export default About;