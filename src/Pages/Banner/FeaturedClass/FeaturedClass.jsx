import { Link } from "react-router-dom";
import useCLass from "../../../Hooks/useCLass";
import { useEffect } from "react";


const FeaturedClass = () => {
    const [allClass] = useCLass()
    console.log(allClass);
    const data = allClass.slice(0, 6)

    useEffect(() => {
        document.title = " Fitness-Tracker | Featured-Class";
    }, []);
    return (
        <div>
            <div>
                <div className=" w-[80%] mx-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
                    {
                        data.map((item, i) => <>
                            <div key={item._id} >
                                   <Link to='/classes'> <div className="card lg:w-60 w-44 h-64  bg-base-100 shadow-md mb-10 " data-aos="zoom-out-up">
                                        <figure><img src={item.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                        <span className="card-title text-center"> Class{i+1}</span> 
                                            <h2 className="card-title uppercase">
                                               {item.className}
                                            </h2>

                                           
                                        </div>
                                    </div></Link>
                                
                            </div>


                        </>)
                    }
                </div>

            </div>
        </div>
    );
};

export default FeaturedClass;