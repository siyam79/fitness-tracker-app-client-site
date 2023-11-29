
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useIsTrainer from "../../Hooks/useIsTrainer";
import useAuth from "../../Hooks/useAuth";
// import useTrainers from "../../Hooks/useTrainers";


const Dashboard = () => {

    const { user } = useAuth()
    // const useAdmin = () => [true];
    // const useTrainers = () => [true]

    const isAdmin = useAdmin()
    console.log(isAdmin[0]);

    const isTrainer = useIsTrainer()

    console.log(isTrainer[0]);


    return (
        <div className=" flex w-[95%] mx-auto mt-1 ">


            <div className="w-64 min-h-screen bg-cyan-500 rounded-sm pt-1">
                <div className=" w-60 ">
                    <img className=" w-24 rounded-full  mx-auto " src={user?.photoURL} alt="" />
                </div>
                <h1 className="text-center text-lg font-bold  ">
                    {user?.displayName}
                </h1>
                <ul className="menu p-2 py-4">

                    {
                        isAdmin[0] && (<div>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/allSubscribers">All subscribers</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/allTrainers">All Trainers</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/appliedTrainers">Applied Trainer</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/paymentHistory">Payment History </NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/balance"> Balace </NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/addForum">Add Forum</NavLink></li>

                        </div>)

                    }

                    {
                        isTrainer[0] && (
                            <div>
                                <li className="font-bold text-xl"><NavLink to="/dashboard/manageMember">Manage Member</NavLink></li>
                                <li className="font-bold text-xl"><NavLink to="/dashboard/manageSlot">Manage Slot</NavLink></li>
                                <li className="font-bold text-xl"><NavLink to="/dashboard/addForum">Add Forum</NavLink></li>
                                <li className="font-bold text-xl"><NavLink to="/dashboard/addClass"> Add Class </NavLink></li>
                            </div>
                        )


                    }
                    {
                        (!isAdmin[0] || !isTrainer[0]) ? <>
                            <div>
                                <li className="font-bold text-xl"><NavLink to="/dashboard/profile"> Profile </NavLink></li>
                                <li className="font-bold text-xl"><NavLink to="/dashboard/activeLog">Activity Log</NavLink></li>
                               
                            </div>
                        </> :
                            // <div>
                            //     <li className="font-bold text-xl"><NavLink to="/dashboard/activeLog">Activity Log</NavLink></li>
                            //     <li className="font-bold text-xl"><NavLink to="/dashboard/profile"> Profile </NavLink></li>
                            // </div>
                            <> </>
                    }
                    {/* {
                        !isAdmin[0] || !isTrainer[0] ? <>
                        </> : <div>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/activeLog">Activity Log</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/profile"> Profile </NavLink></li>
                        </div>
                    } */}


                    <div className="divider"></div>
                    <li className="font-bold text-xl"><NavLink to="/">Home</NavLink></li>
                </ul>

            </div>

            <div className=" flex-1 ml-4 mt-10 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;