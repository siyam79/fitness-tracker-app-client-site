// import useTrainers from "../../Hooks/useTrainers";

const TeamSection = () => {
    // const [trainer] = useTrainers()

    // const data = trainer.slice(0, 3)
    // console.log(data);
    return (
        <div className=" w-[95%] mx-auto ">
            {/* <div className=" grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-10 mb-20 ">
                {data?.map(item => <div key={item._id} className=" w-full lg:w-[300px] bg-base-100 shadow-xl rounded-2xl mt-6  ">
                    <figure className="px-10 pt-10">
                        <img  src={item?.profileImage} alt="Shoes" className="rounded-full w-[200px] h-[180px] mx-auto " />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold  ">{item?.trainerName}</h2>
                        <p> {item.experience}</p>
                    </div>
                </div>)}
            </div> */}
        </div>
    );
};

export default TeamSection;