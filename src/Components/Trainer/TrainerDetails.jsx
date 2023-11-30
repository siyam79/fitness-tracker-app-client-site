import { Link, useLoaderData } from "react-router-dom";
import { IoReturnDownBackSharp } from "react-icons/io5";
import { useEffect } from "react";

const TrainerDetails = () => {
    const data = useLoaderData()
    console.log(data);




    useEffect(() => {
        document.title = " Fitness-Tracker | Trainer-Details";
    }, []);
    return (
        <div>
            <div>

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={data.profileImage} className="lg:w-1/2 rounded-lg shadow-2xl" />
                        <div>
                            <div className="">
                                <h1 className=" text-2xl mb-4 "> Trainer Skills  </h1>
                               
                                <ul>
                                    <li className="uppercase text-md font-bold ">{data.skills.skill1} </li>
                                    <h1 className="uppercase text-md font-bold ">{data.skills.skill2} </h1>
                                    <h1 className="uppercase text-md font-bold ">{data.skills.skill3} </h1>
                                    <h1 className="uppercase text-md font-bold ">{data.skills.skill4} </h1>

                                </ul>
                                <div className="divider"></div>
                            </div>
                            <h1 className="text-xl font-bold mb-4"> Trainer Exprience </h1>
                        
                            <h1 className="text-md font-normal  mb-4"> {data.experience} </h1>
                            <div className="divider"></div>
                            <p className="text-xl mb-2 font-bold "> Booking Now Slot </p>
                            <div className=" flex-1 gap-10 ">
                                {/* <p>{data.timeSlot.slot1} </p> */}
                                <Link to={`/trainerboking/${data.timeSlot.slot1}/${data.trainerName}`}><button className="mr-6 ">{data.timeSlot.slot1}</button></Link>
                                <Link to={`/trainerboking/${data.timeSlot.slot2}/${data.trainerName}`}> <button className="mr-6">{data.timeSlot.slot2}</button></Link>
                                <Link to={`/trainerboking/${data.timeSlot.slot3}/${data.trainerName}`}><button className="mr-6">{data.timeSlot.slot3}</button> </Link>
                                <Link to={`/trainerboking/${data.timeSlot.slot4}/${data.trainerName}`}> <button className="mr-6">{data.timeSlot.slot4}</button></Link>
                                <Link to={`/trainerboking/${data.timeSlot.slot5}/${data.trainerName}`}><button className="mr-6">{data.timeSlot.slot5}</button></Link>
                                <Link to={`/trainerboking/${data.timeSlot.slot6}/${data.trainerName}`}><button>{data.timeSlot.slot6}</button></Link>

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