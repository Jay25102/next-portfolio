import React from 'react'

const Skills = () => {
  return (
    <div className='flex h-full w-full flex-nowrap items-center justify-around'>
      <div className='section-text text-6xl font-semibold text-orange-cust'>Skills</div>
      
      <div className='flex flex-nowrap justify-between'>
        {/* frameworks/languages/soft skills */}
        <div className='skills-card bg-light-blue-cust'>
          <div className='text-3xl'>
            Languages
          </div>
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>Python</div>
        </div>
        
        <div className='skills-card'>
          <div className='text-3xl'>
            Databases
          </div>
          <div>PostgreSQL</div>
          <div>MongoDB</div>
        </div>
        
        <div className='skills-card bg-light-blue-cust'>
          <div className='text-3xl'>
            Frameworks
          </div>
          <div>Node.js</div>
          <div>Next.js</div>
          <div>React.js</div>
          <div>Flask</div>
          <div>Express</div>
        </div>
      </div>
        
      
    </div>
  )
}

export default Skills