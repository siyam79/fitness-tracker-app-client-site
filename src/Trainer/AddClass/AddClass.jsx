import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";

const AddClass = () => {
    const axiosSecure = useAxiosSecure()
    const handleAddClass = (event) => {
        event.preventDefault();
        const form = event.target;
        const className = form.className.value;
        const image = form.image.value;
        const details = form.details.value;


        const addclass = {
            className,
            image,
            details
        }
        axiosSecure.post('/addClass', addclass)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Trainer Applied  successfully', {
                        position: 'top-center'

                    })
                    // window.location.reload()
                    // navigate('/')
                    form.reset()
                }
            })




    }

    useEffect(() => {
        document.title = " Fitness-Tracker | Add-Class";
    }, []);

    return (
        <div>
            <form onSubmit={handleAddClass}>
                <div className="mb-4 w-full ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor="">Class Name</label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Class Name " name="className" required />
                </div>
                <div className="mb-4 w-full ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor="">Image URL</label>
                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="Img URL" name="image" required />
                </div>
                <div className="mb-4 ">
                    <label className="block  text-md font-semibold mb-2 " htmlFor=""> Class Details </label>
                    <textarea className=" bg-gray-800 w-full px-4 py-2 text-white border rounded-lg  focus:outline-none focus:border-blue-500 " name="details" id="" placeholder=" Class Details....  " cols="20" rows="6"></textarea>
                </div>
                <div className=" text-center justify-center  pb-6 ">
                    <button type="submit" className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 ">Add CLass Now</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddClass;