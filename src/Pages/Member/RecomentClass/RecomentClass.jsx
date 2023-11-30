import { Link } from "react-router-dom";
import useCLass from "../../../Hooks/useCLass";


const RecomentClass = () => {

    const [allClass] = useCLass()

    const data = allClass.slice(0, 6)
    console.log(data);

    return (
        <div>
            <div>
                <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
                    {
                        data.map(item => <>
                            <div key={item._id} >

                                <Link to='/classes'> <div className="card lg:w-60 w-44 h-64  bg-base-100 shadow-md mb-10 " data-aos="zoom-out-up">
                                    <figure><img src={item.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title uppercase">
                                            {item.className
                                            }
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

export default RecomentClass;