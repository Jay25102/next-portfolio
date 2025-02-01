import pokemonWebsite from "../public/pokemon_website.png";
import Link from "@node_modules/next/link";

const RecentWork = () => {
  return (
    <div className='flex h-full w-full flex-nowrap items-center justify-around'>
      
      <div className="recent-works-container">
        <Link 
          className='recent-works-card'
          href="https://pokeapi-render.onrender.com/" 
          target="_blank">
          <img className="recent-works-img pokemon-team-builder-img"/>
          <div className="recent-works-details">
            <div>
              Allow authenticated users to search and add Pokemon to teams which are saved to their user profile.
              Built using Flask, PostgreSQL, and the free PokeAPI.
            </div>
          </div>
        </Link>

        <Link 
          className='recent-works-card'
          href="https://github.com/Jay25102/spam-detection-project"
          target="_blank">
          <img className="recent-works-img spam-detection-img"/>
          <div className="recent-works-details">
            <div>
              Machine learning research project built in python for a Natural Language Processing course.
              Testing the difference between two machine learning models on detecting spam/ham emails.
            </div>
          </div>
        </Link>

        <Link 
          className='recent-works-card'
          href="https://jobly-frontend-12cp.onrender.com/"
          target="_blank">
          <img className="recent-works-img jobly-img"/>
          <div className="recent-works-details">
            <div>
              Website that allows users to find and apply to jobs from various companies. Includes
              user account creation and authentication. Full stack project built with React,
              PostgreSQL, Flask, and Node.
            </div>
          </div>
        </Link>
        
      </div>

      <div className='section-text text-6xl font-semibold text-orange-cust'>Recent Works</div>
    </div>
  )
}

export default RecentWork