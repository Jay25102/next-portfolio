import Header from "@components/header";
import Footer from "@components/footer";

const Home = () => {
  return (
    <div>
        {/* left and right bars */}
        <div className="bar bar-left"></div>
        <div className="bar bar-right"></div>
        {/* header component */}
        <Header/>
        {/* body stuff */}
        <section className="w-full">
            {/* make explore/share links */}
            <h1>Explore and Share Desktop Wallpapers</h1>
        </section>
        {/* footer */}
        <Footer/>
    </div>

  )
}

export default Home;