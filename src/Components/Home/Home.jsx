import About from "../../Pages/About/About";
import Banner from "../../Pages/Banner/Banner";
import FeaturedSection from "../../Pages/Banner/FeaturedSection/FeaturedSection";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";
import Testmonial from "../../Pages/Testmonial/Testmonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <About></About>
            <NewsLetter></NewsLetter>
            <Testmonial></Testmonial>
        </div>
    );
};

export default Home;