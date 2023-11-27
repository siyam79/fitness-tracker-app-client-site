import { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedSection = () => {

    const [featuredData, setFeaturedData] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeaturedData(data))
    }, [])
    console.log(featuredData);

    useEffect(() => {
        AOS.init({ duration: "2000" });

    }, []);


    return (
        <div>
            <div>
                <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ">
                    {
                        featuredData?.map(item => <div key={item.id}>
                            <div className="card w-80 mx-auto bg-base-100 h-[350px]  " data-aos="fade-left">
                                <figure><img className="w-full h-[250px]  " src={item.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                       {item.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    {/* <p>{item.description}</p> */}
                                    
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;