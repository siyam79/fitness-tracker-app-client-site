import { Link } from "react-router-dom";
import useMember from "../../../Hooks/useMember";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
const AppliedTrainer = () => {

    const [member] = useMember()
    const [data, setData] = useState({})
    // const data = useLoaderData()
    // console.log(data);



        const hendleMakeTrainer = (id) => {
            fetch(`http://localhost:5000/users?id=${id}`,
                {
                    method: "PATCH",
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        // fetchUsers();
                        // Swal.fire({
                        //     position: "top-end",
                        //     icon: "success",
                        //     title: `${user.name} is an Admin Now!`,
                        //     showConfirmButton: false,
                        //     timer: 1500,
                        // });
                    }
                })
                .catch((error) => {
                    console.error("Error making user admin:", error);
                });
        };

    

    return (
        <>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-300 ">
                                <th>#</th>
                                <th>Name</th>
                                <th>email</th>
                                <th> Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td>  <Link> <button className="" onClick={async () => {
                                    await setData(item)
                                    document.getElementById('my_modal_3').showModal()
                                }}><FaRegEye className="text-2xl "></FaRegEye></button></Link></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg uppercase "> {data.goal} </h3>
                    <p className="py-4">{data.timeDay} </p>
                    <div className="card-actions justify-end cursor-pointer">
                        <button onClick={()=>hendleMakeTrainer(data._id)} className="badge badge-outline">Confirm</button>
                        <div className="badge badge-outline">Reject</div>
                    </div>
                </div>
            </dialog>




        </>

        // <div>
        //     <h1> member {member.length} </h1>
        //     <div>
        //         <div className="overflow-x-auto">
        //             <table className="table">
        //                 {/* head */}
        //                 <thead>
        //                     <tr>
        //                         <th>#</th>
        //                         <th>Name</th>
        //                         <th>Email</th>
        //                         <th>Action</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {member.map((card, i) => <tr key={card._id} className="bg-base-200">
        //                         <th>{i + 1}</th>
        //                         <td> {card.name}</td>
        //                         <td>{card.email}</td>
        //                         {/* <td></td> */}
        //                         <td>
        //                              <Link to={`/member/:${card._id}`}><button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}><FaRegEye className="text-2xl" /></button></Link>
        //                             <dialog id="my_modal_3" className="modal">
        //                                 <div className="modal-box">
        //                                     <form method="dialog">
        //                                         {/* if there is a button in form, it will close the modal */}
        //                                         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        //                                     </form>
        //                                     <h3 className="font-bold text-lg">Hello!</h3>
        //                                     <h1> {card.name} </h1>
        //                                     <p className="py-4">Press ESC key or click on ✕ button to close</p>
        //                                 </div>
        //                             </dialog></td>
        //                     </tr>)}


        //                 </tbody>
        //             </table>
        //             {/* You can open the modal using document.getElementById('ID').showModal() method */}

        //         </div>
        //     </div>
        // </div>
    );
};

export default AppliedTrainer;