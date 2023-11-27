import { Link } from "react-router-dom";
import useMember from "../../../Hooks/useMember";
import { FaRegEye } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
// import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
const AppliedTrainer = () => {

    const { user } = useAuth()
    console.log(user.email);
    const [member,refetch] = useMember()
    const [data, setData] = useState({})

    const form = useRef();
    console.log(data);
    console.log(form.current);


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_arqd66f', 'template_x4irtjj', form.current, 'wGhNocP42LwdM_W5a')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }







    const hendleMakeTrainer = (id) => {
        fetch(`http://localhost:5000/users?id=${id}`,
            {
                method: "PATCH",
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch()
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



{/* 
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog> */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box mt-10 ">
                    <form ref={form} onSubmit={handleSubmit} method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <input type="text" defaultValue={data.name} name="name" />
                        <input type="email" defaultValue={data.email} name="email" />
                        <button type="submit" className="badge badge-outline">Reject</button>
                    </form>
                  
                    <div className="card-actions justify-end cursor-pointer">
                        <button onClick={() => hendleMakeTrainer(data._id)} className="badge badge-outline">Confirm</button>

                    </div>
                </div>
            </dialog>

        </>
    );
};

export default AppliedTrainer;