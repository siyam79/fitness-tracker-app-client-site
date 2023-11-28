import { Link } from "react-router-dom";
import useAllTainers from "../../../Hooks/useAllTainers"
import useTrainers from "../../../Hooks/useTrainers";

const AllTrainers = () => {


    const [allTrainer] = useAllTainers()
    return (
        <div>


            <div className=" mt-10">

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
                                    <td>{trainer.salary} </td>
                                    <td>{trainer.status} </td>
                                    <td><Link to='/dashboard/pyment'><button className="badge badge-outline py-3 px-4 ">Pyment</button></Link> </td>

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