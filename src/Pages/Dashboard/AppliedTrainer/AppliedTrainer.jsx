import useMember from "../../../Hooks/useMember";
import { FaRegEye } from "react-icons/fa";
const AppliedTrainer = () => {

    const [member] = useMember()
    return (
        <div>
            <h1> member {member.length} </h1>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((card, i) => <tr key={card._id} className="bg-base-200">
                                <th>{i + 1}</th>
                                <td> {card.name}</td>
                                <td>{card.email}</td>
                                {/* <td></td> */}
                                <td> <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}><FaRegEye className="text-2xl" /></button>
                                    <dialog id="my_modal_3" className="modal">
                                        <div className="modal-box">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <h1> {card.name} </h1>
                                            <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                        </div>
                                    </dialog></td>
                            </tr>)}


                        </tbody>
                    </table>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                </div>
            </div>
        </div>
    );
};

export default AppliedTrainer;