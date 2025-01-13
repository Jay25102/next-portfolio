import HomeText from "@components/home-text";
import About from "@components/about";

const Home = () => {
  return (
    <div>
      {/* left and right bars */}
      <div className="bar bar-left bg-white-cust"></div>
      <div className="bar bar-right bg-white-cust"></div>

      {/* header component
        <Header/> */}

      {/* body home*/}
      <div className="box-border block bg-light-blue-cust">
        <div className="box-border block body-block px-8 relative flex justify-center items-center">
          {/* make explore/share links */}
          <HomeText />
        </div>
      </div>

      {/* body Who I am */}
      <div className="box-border block bg-white-cust">
        <div className="box-border body-about-me block px-8 relative flex justify-center items-center">
          <About/>
        </div>
      </div>


    </div>

  )
}

export default Home;