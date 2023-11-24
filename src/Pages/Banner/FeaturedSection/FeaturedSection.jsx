import { useState } from "react";
import { useEffect } from "react";


const FeaturedSection = () => {

    const [featuredData, setFeaturedData] = useState([])



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
                <div>
                    {
                        featuredData?.map(item => <div key={item.id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Shoes!
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Fashion</div>
                                        <div className="badge badge-outline">Products</div>
                                    </div>
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