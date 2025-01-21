import pokemonWebsite from "../public/pokemon_website.png";

const RecentWork = () => {
  return (
    <div className='flex h-full w-full flex-nowrap items-center justify-around'>
      
      <div className="recent-works-container">
        <div className='recent-works-card'>
          <img className="recent-works-img"/>
          <div className="recent-works-details">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatibus alias dolores a quae sint ipsam mollitia tenetur nisi quasi officiis, vitae, ut aut quaerat magnam labore quam quo libero.
            </div>
            <button>Check it out</button>
          </div>
        </div>

        <div className='recent-works-card'>
          <img className="recent-works-img"/>
          <div className="recent-works-details">
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptatibus alias dolores a quae sint ipsam mollitia tenetur nisi quasi officiis, vitae, ut aut quaerat magnam labore quam quo libero.
            </div>
            <button>Check it out</button>
          </div>
        </div>
        
      </div>

      <div className='section-text text-6xl font-semibold text-orange-cust'>Recent Works</div>
    </div>
  )
}

export default RecentWork