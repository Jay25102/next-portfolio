import Header from "@components/header";
import Footer from "@components/footer";

const Home = () => {
  return (
    <div>
        {/* left and right bars */}
        <div className="bar bar-left bg-blue-cust"></div>
        <div className="bar bar-right bg-blue-cust"></div>
        {/* header component */}
        <Header/>
        {/* body */}
        <div className="box-border block bg-light-blue-cust">
          <div className="box-border block body-block px-8 relative">
              {/* make explore/share links */}
              {/* center */}
              <h1 className="text-7xl font-bold text-white-cust w-auto block w-1/2">Explore and Share Desktop Wallpapers</h1>
          </div>
        </div>
        {/* footer */}
        <Footer/>
    </div>

  )
}

export default Home;