import { useEffect, useState } from "react";
import logo1 from "../../assets/img/pngsilver.png"
import logo2 from "../../assets/img/gold.jpeg"
import logo3 from "../../assets/img/ddaimond.jpeg"
import useAuth from "../../Hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";


const TrainerBoking = () => {
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const [selectSlot, setSelectSlot] = useState()

    const { data: selectedSlot, trainerName } = useParams();

    const handleChosePlan = (selectSlot, price, packageName) => {
        const finalSelectedSlot = selectedSlot || selectSlot;
        const finalTrainerName = trainerName || trainerName;

        if (finalSelectedSlot === null) {
            return
        }





        axiosPublic.post('/plancard', {
            user,
            packageName: packageName,
            price: price,
            trainerName: finalTrainerName,
            finalSelectedSlot: selectedSlot
        })
            .then(res => {
                console.log(res.data);

                if (res.data.insertedId) {
                    toast.success(" Job Add Success Full ", {
                        position: "top-center"
                    })
                    setTimeout(() => {
                        navigate('/payment')
                    }, 1000);

                }

            }).catch((error) => {
                console.error("Error:", error);
                // Swal.fire({
                //   icon: 'error',
                //   title: 'Oops...',
                //   text: 'Something went wrong!',
                // });
            });


    }


    useEffect(() => {
        document.title = " Fitness-Tracker | Trainer-Boking";
    }, []);
    return (
        <div className=" lg:mb-20 ">
            <div className=" text-center font-bold text-3xl mt-10 ">
                <h1>Membership Package</h1>
            </div>
            <div className=" mt-10  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 w-[80%] mx-auto  ">
                <div className="card w-60 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-2 ">
                        <img src={logo1} alt="Shoes" className="rounded-xl w-full " />
                    </figure>
                    <div className="text-center mt-4 font-bold text-2xl ">
                        <h1>Price : <span>$199 </span> </h1>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 onClick={() => handleChosePlan('Silver', selectSlot)} className="card-title font-bold truncate ">Silver Membership </h2>

                        <div className="card-actions">
                            <button onClick={() => handleChosePlan('Silver', selectSlot, 199)} className="btn badge badge-outline mt-2 ">Join Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-60 bg-base-100 shadow-xl">
                    <figure className="px- pt-2">
                        <img src={logo2} alt="Shoes" className="rounded-xl w-[120px]" />
                    </figure>
                    <div className="text-center mt-4 font-bold text-2xl ">
                        <h1>Price : $<span> 299 </span> </h1>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 onClick={() => handleChosePlan('Gold', selectSlot)} className="card-title font-bold truncate">Gold Membership</h2>
                        {/* <p>Brand off Lessons </p>
                        <p>All Time Support </p>
                        <p>7/24 Hours On</p>
                        <p> Best Off Qulatity </p>
                        <p>Intarnational Brand</p> */}
                        <div className="card-actions">
                            <button onClick={() => handleChosePlan('Gold', selectSlot, 299)} className="btn badge badge-outline mt-2 ">Join Now</button>
                        </div>
                    </div>
                </div>


                <div className="card w-60 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-2">
                        <img src={logo3} alt="Shoes" className="rounded-xl w-[120px] " />
                    </figure>
                    <div className="text-center mt-4 font-bold text-2xl ">
                        <h1>Price :  $<span> 499 </span> </h1>
                    </div>
                    <div className="card-body items-center text-center">
                        <h2 onClick={() => handleChosePlan('Daimond', selectSlot)} className="card-title font-bold truncate">Daimond  Membership</h2>

                        <div className="card-actions">
                            <button onClick={() => handleChosePlan('Daimond', selectSlot, 499)} className="btn badge badge-outline mt-2 ">Join Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>

    );
};

export default TrainerBoking;