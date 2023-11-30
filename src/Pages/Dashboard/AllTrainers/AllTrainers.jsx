import { Link } from "react-router-dom";
import useAllTainers from "../../../Hooks/useAllTainers"
import useTrainers from "../../../Hooks/useTrainers";
import { useEffect } from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";


const AllTrainers = () => {
    
    const [allTrainer] = useAllTainers()
    // const [trainers, setTrainers] = useState([]);
    // console.log(trainers);
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:5000/roleTrainer?role=trainer")
    //         .then((res) => res.data)
    //         .then((data) => setTrainers(data))
    //         .catch((error) => console.error("Error fetching data:", error));
    // }, []);
    useEffect(() => {
        document.title = " Fitness-Tracker | All-Trainer";
    }, []);
    return (
        <div>
            <div className="">

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg  bg-slate-300 ">
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Status</th>
                                <th>Pyment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allTrainer.map((trainer, i) => <tr key={trainer._id}>
                                    <th>{i + 1}</th>
                                    <td>{trainer.trainerName}</td>
                                    <td>{trainer.email}</td>
                                    <td>{trainer.salary}</td>
                                    <td className=" uppercase font-semibold">{trainer.status}</td>
                                    <td> <Link to={`/dashboard/pyment/${trainer._id}/${trainer.salary}/${trainer.status}`}>
                                        <button className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal w-[100px] text-white ">
                                            Pay ${trainer.salary}
                                        </button>
                                    </Link> </td>

                                    {/* <td> <Link to={`/dashboard/pyment/${trainer._id}/${trainer.salary}`}>
                                        <button className="rounded bg-green-500 px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white ">
                                            Pay ${trainer.salary}
                                        </button>
                                    </Link> </td> */}

                                    {/* <td><Link to='/dashboard/pyment'><button className="badge badge-outline py-3 px-4 ">Pyment</button></Link> </td> */}

                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default AllTrainers;