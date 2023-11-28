

import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useTrainers from "../../Hooks/useTrainers";


const Dashboard = () => {

    // const useAdmin = () => [true];
    // const useTrainers = () => [true]

    const [isAdmin] = useAdmin()
    console.log(isAdmin);
    
    const [allTrainer] = useTrainers()
    console.log(allTrainer);
    //  todo :
    // const isAdmin = true;

    return (
        <div className=" flex w-[95%] mx-auto mt-1 ">

            <div className="w-64 min-h-screen bg-cyan-500 rounded-sm py-6">

                <ul className="menu p-2 py-4">
                    {isAdmin ? (
                        <>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/allSubscribers">All subscribers</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/allTrainers">All Trainers</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/appliedTrainers">Applied Trainer</NavLink></li>

                            {/*  aI ROUTE GULA trainer ar thakbe  */}
                            <li className="font-bold text-xl"><NavLink to="/dashboard/addForum">Add Forum</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/addClass"> Add Class </NavLink></li>
                        </>
                    ) : allTrainer ? (
                        <>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/manageMember">Manage Member</NavLink></li>
                            <li className="font-bold text-xl"><NavLink to="/dashboard/manageSlot">Manage Slot</NavLink></li>
                        </>
                    ) : null}
                    <div className="divider"></div>
                    <li className="font-bold text-xl"><NavLink to="/">Home</NavLink></li>
                </ul>

                {/* <ul className="menu p-2 py-4 ">

                    {
                        isAdmin &&
                        <>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/allSubscribers"> All subscribers </NavLink></li>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/allTrainers"> All Trainers </NavLink></li>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/appliedTrainers"> Applied Trainer </NavLink></li>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/addForum"> Add Forum </NavLink></li>

                        </>
                    }
                    {allTrainer ?
                        <>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/manageMember"> Manage Member </NavLink></li>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/manageSlot"> Manage Slot </NavLink></li>

                        </>
                        :
                        <>
                        </>}

                    <div className="divider"></div>
                    <li className=" font-bold text-xl"><NavLink to="/"> Home </NavLink></li>
                </ul> */}
            </div>

            <div className=" flex-1 ml-4 mt-10 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;