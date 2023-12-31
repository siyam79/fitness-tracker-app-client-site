import { Link } from "react-router-dom";
import useTrainers from "../../Hooks/useTrainers";
import { useEffect } from "react";

const TeamSection = () => {
    const [trainer] = useTrainers()

    const data = trainer.slice(0, 3)
    console.log(data);


    useEffect(() => {
        document.title = " Fitness-Tracker | Team-Section";
    }, []);
    return (
        <div className=" w-[95%] mx-auto ">
          <h1 className="text-2xl font-bold my-10 text-center ">Team Section </h1>
            <div className=" grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-10 mb-20 ">
                {data?.map(item => <div key={item._id} className=" w-full lg:w-[300px] h-[450px] bg-base-100 shadow-xl rounded-2xl mt-6  ">
                    <figure className="px-10 pt-4">
                        <img src={item?.profileImage} alt="Shoes" className="rounded-full w-[200px] h-[180px] mx-auto " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold  ">{item?.trainerName}</h2>
                        <p> {item.experience}</p>
                    </div>
                    <div className=" flex justify-center text-center ">
                        <Link to='/trainer'><button className="badge badge-outline  px-4 py-3 text-center " > Now More  </button></Link>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default TeamSection;