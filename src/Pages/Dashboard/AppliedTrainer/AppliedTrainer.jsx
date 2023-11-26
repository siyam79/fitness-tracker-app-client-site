import { Link } from "react-router-dom";
import useMember from "../../../Hooks/useMember";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
const AppliedTrainer = () => {

    const { user } = useAuth()
    console.log(user.email);
    const [member] = useMember()
    const [data, setData] = useState({})
    // const data = useLoaderData()
    // console.log(data);

    const handleSubmit = (e) => {
        const templateParams = {
            to_email: user?.email
        };

        emailjs.sendForm('service_e605b1t', 'template_28viznu', form.current, 'wGhNocP42LwdM_W5a', templateParams)
            .then((result) => { console.log(result.text) }, (error) => { console.log(error.text) });
        const ApplierName = e.target.name.value;
        const ApplierEmail = e.target.email.value;
        const ApplierResume = e.target.resume.value;
        const AppliedJob = { ...Job, ApplierName, ApplierEmail, ApplierResume };
        delete AppliedJob._id;
        fetch('https://assignment-11-server-side-netrix.vercel.app/api/v1/application', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(AppliedJob)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    fetch(`https://assignment-11-server-side-netrix.vercel.app/api/v2/job?id=${_id}`, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ $inc: { ApplicantsNumber: 1 } })
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('Data Updated', data);
                            if (data) {
                                toast.success('Your Application Submited Successfully')
                            }
                        })
                }

            })

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
                        <button onClick={() => hendleMakeTrainer(data._id)} className="badge badge-outline">Confirm</button>
                        <button onClick={handleSubmit} className="badge badge-outline">Reject</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default AppliedTrainer;