import { useEffect, useState } from "react";


const Testmonial = () => {

    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    console.log(data);



    return (
        <div>
            <div>
                <div className=" w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ">
                    {
                        data?.map(item => <div key={item.id}>
                            <div className="card w-88 mx-auto bg-base-100 h-[400px] shadow-md  ">
                                <figure><img className="w-full h-[250px]  " src={item.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                       {item.name}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{item.stories}</p>
                                    
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testmonial;