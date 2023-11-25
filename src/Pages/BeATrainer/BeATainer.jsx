import { ToastContainer, toast } from "react-toastify";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;

// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const BeATainer = () => {

    // const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    console.log(user.email);
    const axiosSecure = useAxiosSecure()


    // const imageFile = {image : data.image[0]}
    // const imageSubmit = async (data) =>{
    //     const res = axiosPublic.post(image_hosting_api,imageFile, {
    //         headers:{
    //             "content-type" : "multipart/form-data"
    //         }
    //     })
    //     console.log(res.data);
    // }





    const handleApplied = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const age = form.age.value;
        const photo = form.photo.value;
        const timeDay = form.timeDay.value;
        const timeWeek = form.timeWeek.value;
        const timeHour = form.timeHour.value;
        const role = "member"
        const skills = {
            skill1: { checked: form.skill1.checked, value: form.skill1.checked ? form.skill1.value : '' },
            skill2: { checked: form.skill2.checked, value: form.skill2.checked ? form.skill2.value : '' },
            skill3: { checked: form.skill3.checked, value: form.skill3.checked ? form.skill3.value : '' },
            skill4: { checked: form.skill4.checked, value: form.skill4.checked ? form.skill4.value : '' }
        };

        const checkedSkills = {};
        for (const [key, value] of Object.entries(skills)) {
            if (value.checked) {
                checkedSkills[key] = value.value;
            }
        }

        const trainerDoc = { email, age, timeDay, role, name, photo, timeWeek, timeHour, skills: checkedSkills }
        console.log(trainerDoc);


        axiosSecure.post('/addTrainer', trainerDoc)
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
    return (
        <div>
            <div>
                <div className=" lg:w-1/2 mx-auto pt-1  bg-base-300 rounded-lg shadow-3xl mt-1 ">
                    <h2 className="text-3xl text-center text-fuchsia-800 font-bold mb-6 mt-10 ">  Applied Trainer  </h2>
                    <form onSubmit={handleApplied} className="px-2">
                        <div className=" lg:flex gap-4 ">
                            <div className="mb-4  w-full ">
                                <label className="block  text-md font-semibold mb-2 " htmlFor="">Name</label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Your Name " name="name" required />
                            </div>

                            <div className="mb-4  w-full ">
                                <label className="block  text-md font-semibold mb-2 " htmlFor=""> Email </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder="" readOnly defaultValue={user.email} name="email" required />
                            </div>
                        </div>

                        <div className="mb-4 w-full ">
                            <label className="block text-md font-semibold mb-2 " htmlFor=""> Profile Image URL </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="text" placeholder=" Profile Image " name="photo" required />
                        </div>

                        <div className="mb-4 w-full ">
                            <label className="block text-md font-semibold mb-2 " htmlFor=""> How Many Hour in a day </label>
                            <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Enter  Available Time hour " name="timeHour" required />
                        </div>

                        <div className=" gap-4 ">
                            <div className="lg:flex gap-4 ">
                                <div className="mb-4 w-full ">
                                    <label className="block   text-md font-semibold mb-2 " htmlFor=""> Available Time in a week </label>
                                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Available Time in a week" name="timeWeek" required />
                                </div>
                                <div className="mb-4 w-full ">
                                    <label className="block   text-md font-semibold mb-2 " htmlFor=""> Available time in a day. </label>
                                    <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 " type="number" placeholder="Available time in a day" name="timeDay" required />
                                </div>
                            </div>

                            <div className="form-control px-5">
                                <label className="label">
                                    <span className='label-text font-bold'>Select Your Skills</span>
                                </label>
                                <label className="input-group">
                                    <div className="lg:flex gap-2">
                                        <div className="flex gap-2" >
                                            <input type="checkbox"
                                                name="skill1" id="skill1" value={'yoga'} />
                                            <label htmlFor="skill1"><a href="#">Yoga</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox"
                                                name="skill2" id="skill2" value={'body_building'} />
                                            <label htmlFor="skill2"><a href="#">Body Building</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox"
                                                name="skill3" id="skill3" value={'muscle_gain'} />
                                            <label htmlFor="skill3"><a href="#">Muscle Gain</a></label>
                                        </div>
                                        <div className="flex gap-2" >
                                            <input type="checkbox"
                                                name="skill4" id="skill4" value={'weight_loss'} />
                                            <label htmlFor="skill4"><a href="#">Weight Loss</a></label>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div className="mb-4 w-full ">
                                <label className="block text-md font-semibold mb-2 " htmlFor=""> Age  </label>
                                <input className=" w-full px-4 py-2 text-white border rounded-lg bg-gray-800 focus:outline-none focus:border-blue-500 
                                
                            " type="number" placeholder=" Your Age " name="age" required />

                            </div>
                            <input name="photo" type="file" className="file-input file-input-bordered w-full max-w-xs" />
                        </div>


                        <div className=" text-center justify-center  pb-6 ">
                            <button type="submit" className=" w-40 rounded-lg  text-white bg-pink-800 hover:bg-pink-500 py-2 ">Applay Now</button>
                        </div>
                    </form>

                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default BeATainer;