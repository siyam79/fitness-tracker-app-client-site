import { useState } from "react";
import { useEffect } from "react";


const FeaturedSection = () => {

    const [featuredData, setFeaturedData] = useState({})



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeaturedData(data))
    }, [])
    console.log(featuredData);


    return (
        <div>
            <div>
                <h1> data {featuredData.length} </h1>
            </div>
        </div>
    );
};

export default FeaturedSection;