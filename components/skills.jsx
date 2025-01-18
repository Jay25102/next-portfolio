import React from 'react'

const Skills = () => {
  return (
    <div className='flex h-full w-full flex-nowrap'>
      <div className='flex flex-nowrap justify-between'>
        {/* frameworks/languages/soft skills */}
        <div className='skills-card bg-light-blue-cust'>
          Languages
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>Python</div>
        </div>
        
        <div className='skills-card'>
          Database Management
          <div>PostgreSQL</div>
        </div>
        
        <div className='skills-card bg-light-blue-cust'>
          Frameworks
          <div>Node.js</div>
          <div>Next.js</div>
          <div>React.js</div>
          <div>Flask</div>
          <div>Express</div>
        </div>
      </div>
        
      <div className='about-me-text text-6xl font-semibold text-orange-cust'>Skills</div>
    </div>
  )
}

export default Skills