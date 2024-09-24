import BannerSection from "./BannerSection";
import BestDeal from "./BestDeal";
import FeaturedSection from "./FeaturedSection.jsx";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Parallexeff from "./Parallexeff";

const Home = () => {
    return (
      <div>
       <Hero/>
       
       <Features/>
       <Parallexeff />
       <BestDeal />
       <BannerSection />
       <FeaturedSection />
       <Footer />

       
      </div>
    );
  };
  
  export default Home;