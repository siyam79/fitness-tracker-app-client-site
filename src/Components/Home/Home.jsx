import About from "../../Pages/About/About";
import Banner from "../../Pages/Banner/Banner";
import FeaturedSection from "../../Pages/Banner/FeaturedSection/FeaturedSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <About></About>
        </div>
    );
};

export default Home;