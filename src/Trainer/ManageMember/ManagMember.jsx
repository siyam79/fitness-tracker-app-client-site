import { useEffect } from "react";
import useMember from "../../Hooks/useMember";


const ManagMember = () => {

    const [member] = useMember()
    console.log(member);

    useEffect(() => {
        document.title = " Fitness-Tracker | Manage-Member";
    }, []);


    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-semibold bg-slate-300  ">
                              
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Sending </th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map(user =>  <tr key={user._id} className=" hover:bg-slate-200  ">
                               
                               <td>
                                   <div className="flex items-center gap-3">
                                       <div className="avatar">
                                           <div className="mask mask-squircle w-12 h-12">
                                               <img src={user?.profileImage} alt="Avatar Tailwind CSS Component" />
                                           </div>
                                       </div>
                                      
                                   </div>
                               </td>
                               <td>
                                  {user?.trainerName}
                                  
                               </td>
                               <td>{user?.email} </td>
                               <th>
                                   <h1  className=" uppercase ">{user.role}</h1>
                               </th>
                               <th>
                                   <button className="btn btn-ghost btn-xs">Send Email </button>
                               </th>
                           </tr>
                         )}
                           
                          
                          
                        </tbody>
                        {/* foot */}
                       
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagMember;