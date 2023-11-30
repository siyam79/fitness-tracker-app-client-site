import { Outlet } from "react-router-dom";
import NabBar from "../NabBar";
import Footer from "../Footer/Footer";
import { useEffect } from "react";


const MainLayOut = () => {

    useEffect(() => {
        document.title = " Fitness-Tracker | Main-Layout";
    }, []);
    return (
        <div className="w-[95%] mx-auto px-1 ">
            <NabBar></NabBar>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayOut;