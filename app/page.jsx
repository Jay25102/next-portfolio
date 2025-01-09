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
        {/* body stuff */}
        <section className="w-full">
            {/* make explore/share links */}
            <h1 className="text-7xl font-bold text-white-cust">Explore and Share Desktop Wallpapers</h1>
        </section>
        {/* footer */}
        <Footer/>
    </div>

  )
}

export default Home;