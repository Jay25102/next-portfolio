import Header from "@components/header";
import Footer from "@components/footer";

const Home = () => {
  return (
    <div>
        {/* left and right bars */}
        <div className="bar bar-left bg-white-cust"></div>
        <div className="bar bar-right bg-white-cust"></div>
        {/* header component */}
        <Header/>
        {/* body */}
        <div className="box-border block bg-light-blue-cust">
          <div className="box-border block body-block px-8 relative flex justify-center items-center">
              {/* make explore/share links */}
              {/* center */}
              <h1 className="text-7xl font-bold text-white-cust text-center align-middle w-4/5 h-auto">
                <span className="text-orange-cust">Explore</span> and <span className="text-blue-cust">Share</span> Desktop Wallpapers
              </h1>
          </div>
        </div>
        {/* footer */}
        <Footer/>
    </div>

  )
}

export default Home;