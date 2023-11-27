import { useLoaderData } from "react-router-dom";


const TrainerDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div>
        
                <h1> {data.trainerName} </h1>
                <p>{data.availableTimeSlot[0]} </p>
                <p>{data.availableTimeSlot[1]} </p>
                {/* <p> {data.skills?.skill3} </p> */}
            </div>
        </div>
    );
};

export default TrainerDetails;