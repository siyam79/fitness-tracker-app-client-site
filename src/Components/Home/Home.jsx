import About from "../../Pages/About/About";
import Banner from "../../Pages/Banner/Banner";
import FeaturedClass from "../../Pages/Banner/FeaturedClass/FeaturedClass";
import FeaturedSection from "../../Pages/Banner/FeaturedSection/FeaturedSection";
import NewsLetter from "../../Pages/NewsLetter/NewsLetter";
import TeamSection from "../../Pages/TeamSection/TeamSection";
import Testmonial from "../../Pages/Testmonial/Testmonial";


const Home = () => {

   
    return (
        <div>
            <Banner></Banner>
            <FeaturedSection></FeaturedSection>
            <About></About>
            <FeaturedClass></FeaturedClass>
            <NewsLetter></NewsLetter>
            <Testmonial></Testmonial>
            <TeamSection></TeamSection>
        </div>
    );
};

export default Home;