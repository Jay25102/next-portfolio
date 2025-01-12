import HomeText from "@components/home-text";

const Home = () => {
  return (
    <div>
        {/* left and right bars */}
        <div className="bar bar-left bg-white-cust"></div>
        <div className="bar bar-right bg-white-cust"></div>

        {/* header component
        <Header/> */}

        {/* body */}
        <div className="box-border block bg-light-blue-cust">
          <div className="box-border block body-block px-8 relative flex justify-center items-center">
              {/* make explore/share links */}
              <HomeText/>
          </div>
        </div>

        <div className="box-border block bg-white-cust">
          <div className="box-border block body-block px-8 relative flex justify-center items-center">
              {/* make explore/share links */}
              <HomeText/>
          </div>
        </div>

        
    </div>

  )
}

export default Home;