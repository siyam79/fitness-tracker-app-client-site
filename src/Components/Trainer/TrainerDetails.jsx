import { Link, useLoaderData } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";

const TrainerDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={data.profileImage} className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-xl font-bold mb-4"> {data.experience} </h1>

                            <div className=" flex-1 gap-10 ">
                                {/* <p>{data.timeSlot.slot1} </p> */}
                                <button className="mr-6 ">{data.timeSlot.slot1}</button>
                                <button className="mr-6">{data.timeSlot.slot2}</button>
                                <button className=" mr-6">{data.timeSlot.slot3}</button>
                                <button className="mr-6">{data.timeSlot.slot4}</button>
                                <button className="mr-6">{data.timeSlot.slot5}</button>
                                <button>{data.timeSlot.slot6}</button>

                            </div>
                            <div>
                                <Link to='/trainer'><IoReturnDownBackSharp className="text-4xl mt-4 hover:text-red-700 "></IoReturnDownBackSharp></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrainerDetails;