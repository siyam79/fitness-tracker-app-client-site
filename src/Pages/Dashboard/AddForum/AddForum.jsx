import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AddForum = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const handleForum = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const title = form.title.value;
        const name = form.name.value;
        const forum = form.forum.value;

        const forumInfo = {
            email, title, name, forum
        }
        axiosSecure.post('/forum', forumInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Forum Data Post successfully', {
                        position: 'top-center'

                    })
                    // window.location.reload()
                    // navigate('/')
                    form.reset()
                }
            })


    }



    return (
        <div>
            <div>
                <form onSubmit={handleForum}>
                    <div className=" lg:flex gap-4 ">
                        <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor="">Title Name</label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Your Name " name="title" required />
                        </div>
                        <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor="">Your Email </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="" readOnly defaultValue={user.email} name="email" required />
                        </div>
                        <div className="mb-4  w-full ">
                            <label className="block  text-md font-semibold mb-2 " htmlFor="">Your Name </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="" readOnly defaultValue={user?.displayName} name="name" required />
                        </div>
                    </div>
                    <div className="mb-4 ">
                        <label className="block  text-md font-semibold mb-2 " htmlFor=""> Your Faroums  </label>
                        <textarea className=" bg-gray-800 w-full px-4 py-2 text-white border rounded-lg  focus:outline-none focus:border-blue-500 " name="forum" id="" placeholder=" Years Of faroums....  " cols="20" rows="6"></textarea>
                    </div>

                    <div className=" text-center justify-center  pb-6 ">
                        <button type="submit" className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 ">Faroum Add </button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddForum;