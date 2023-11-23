import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center ">
                <img src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg" alt="" />
            </div>
            <div className=" flex items-center justify-center ">
           <Link to='/'> <button className=" bg-red-500 text-white font-bold px-10 py-2 text-xl rounded-sm ">Go to Home </button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;