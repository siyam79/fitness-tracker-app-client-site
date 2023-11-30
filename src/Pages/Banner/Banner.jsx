// import banner from '../../assets/img/valery-sysoev-LDAirERNzew-unsplash.jpg'

import { Link } from "react-router-dom";
import { BiChevronsDown  } from "react-icons/bi";
import { useEffect } from "react";
const Banner = () => {

    useEffect(() => {
        document.title = " Fitness-Tracker | Banner";
    }, []);
    return (
        <div className="">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url("https://i.ibb.co/0YpVGkw/valery-sysoev-LDAir-ERNzew-unsplash.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">BE YOUR
                         <br />BEST SELF</h1>
                        <p className="mb-5">The BeZu fitness studios combine the latest fitness classes and technology in one very exclusive, premium space and juxtaposes them with high energy workouts, high tech LPG Endermologie®, fitness scanning and body sculpting therapies for the ultimate mental and physical balance..</p>
                      <div className="text-center ">
                      <Link to='/classes'> <button className=" bg-cyan-600 text-white px-4 py-2 font-bold rounded-md  ">Get Started  <BiChevronsDown  className="ml-6 text-4xl "/> </button>
                      </Link>
                     
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;