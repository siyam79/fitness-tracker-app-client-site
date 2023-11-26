import { Link } from "react-router-dom";
import useCLass from "../../Hooks/useCLass";
import PropTypes from 'prop-types';
import { useState } from "react";

const Classes = () => {

    // const data = useLoaderData()
    // console.log(data);
const [data , setData] = useState({})


    const [allClass] = useCLass()




    return (
        <>
            <div>
                <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 ">
                    {
                        allClass.map(item => <>
                            <div key={item._id} >
                                <Link to='/trainer'>
                                    <div className="card lg:w-60 w-44 h-64  bg-base-100 shadow-md mb-10 ">
                                        <figure><img src={item.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title uppercase">
                                                {item.className}
                                            </h2>

                                            <div className="card-actions justify-end mt-6">
                                                <div className="badge badge-outline mt-2 px-4 py-3 ">{/* You can open the modal using document.getElementById('ID').showModal() method */}
                                                   <Link> <button className="" onClick={ async () => {
                                                       await setData(item)
                                                       document.getElementById('my_modal_3').showModal()
                                                    }}>Details</button></Link>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>


                        </>)
                    }
                </div>


            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg uppercase "> {data.goal} </h3>
                    <p className="py-4">{data.details} </p>
                </div>
            </dialog>
        </>
    );
};
Classes.propTypes = {
    data: PropTypes.object
}


export default Classes;