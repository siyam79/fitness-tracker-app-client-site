import About from "../../Pages/About/About";
import Banner from "../../Pages/Banner/Banner";
import FeaturedSection from "../../Pages/Banner/FeaturedSection/FeaturedSection";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";
import TeamSection from "../../Pages/TeamSection/TeamSection";
// import Testmonial from "../../Pages/Testmonial/Testmonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <About></About>
            <NewsLetter></NewsLetter>
            {/* <Testmonial></Testmonial> */}
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;