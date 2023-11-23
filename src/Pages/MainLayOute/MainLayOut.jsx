import { Outlet } from "react-router-dom";
import NabBar from "../NabBar";


const MainLayOut = () => {
    return (
        <div className="w-[95%] mx-auto px-1 ">
            <NabBar></NabBar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;