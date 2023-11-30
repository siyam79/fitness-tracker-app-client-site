import useMember from "../../../Hooks/useMember";
import { FaRegEye } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const AppliedTrainer = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    console.log(user.email);
    const [member, refetch] = useMember()
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

        axiosSecure.patch(`/users?id=${id}`)
            .then(res => {
                if (res.data?.modifiedCount > 0) {
                    refetch()
                    toast.success(' Member Update  successfully', {
                        position: 'top-center'

                    })
                }
            })



        // fetch(`https://n-three-vert.vercel.app/users?id=${id}`,
        //     {
        //         method: "PATCH",
        //     })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         if (data.modifiedCount > 0) {
        //             refetch()

        //         }
        //     })
        //     .catch((error) => {
        //         console.error("Error making user admin:", error);
        //     });
    };
    useEffect(() => {
        document.title = " Fitness-Tracker | Applied-Trainer";
    }, []);

    return (
        <>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr className="bg-slate-300 w-full text-lg ">
                                <th>#</th>
                                <th>Name</th>
                                <th>E-mail</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td> {item.trainerName} </td>
                                <td> {item.email} </td>
                                <td className="uppercase"> {item.role} </td>
                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="" onClick={async () => {
                                        await setData(item)
                                        document.getElementById('my_modal_1').showModal()
                                    }}><FaRegEye className="text-2xl "></FaRegEye></button>

                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>






            {/*  runging  */}


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> {data.name} </h3>
                    <div className=" flex gap-4  ">
                        <img className=" w-60 " src={data.profileImage} alt="" />
                        <h1 className="font-semibold text-xl "> Monthly-Salary ${data.salary} </h1>
                    </div>
                    <p className="py-4 font-semibold text-lg "> {data.experience} </p>


                    {/* TODO */}
                    <form ref={form} onSubmit={handleSubmit} method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"></button>
                        <input className="hidden" type="text" defaultValue={data.name} name="name" />
                        <input className="hidden" type="email" defaultValue={data.email} name="email" />
                        <button type="submit" className="badge badge-outline ml-[380px] mb-4 px-4 py-3 mt-6 ">Reject</button>
                    </form>

                    <div className="card-actions justify-end cursor-pointer">
                        <button onClick={() => hendleMakeTrainer(data._id)} className="badge badge-outline px-4 py-3 ">Confirm</button>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn"><AiOutlineClose className="text-xl text-red-600" /></button>
                        </form>
                    </div>
                </div>
            </dialog>

            <ToastContainer></ToastContainer>

        </>
    );
};

export default AppliedTrainer;