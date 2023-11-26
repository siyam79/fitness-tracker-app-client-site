import { useLoaderData } from "react-router-dom";
import Classes from "./Classes";


const ClassDetails = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
           <Classes data={data}></Classes>
           <div>
            
           </div>
        </div>
    );
};

export default ClassDetails;