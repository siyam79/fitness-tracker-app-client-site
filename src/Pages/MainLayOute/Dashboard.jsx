import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    //  todo :
    const isAdmin = true;



    return (
        <div className=" flex w-[95%] mx-auto mt-1 ">

            <div className="w-64 min-h-screen bg-cyan-500 rounded-sm py-6">

                <ul className="menu p-2 py-4 ">

                    {
                        isAdmin ? <>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/allSubscribers"> All subscribers </NavLink></li>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/allTrainers"> All Trainers </NavLink></li>
                            <li className=" font-bold text-xl"><NavLink to="/dashboard/appliedTrainers"> Applied Trainer </NavLink></li>


                        </>
                            :
                            <>


                            </>
                    }






                    <div className="divider"></div>
                    <li className=" font-bold text-xl"><NavLink to="/"> Home </NavLink></li>
                </ul>
            </div>

            <div className=" flex-1 ml-4 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;