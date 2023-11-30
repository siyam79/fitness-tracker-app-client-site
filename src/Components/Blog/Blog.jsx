import { useEffect } from "react";

const Blog = () => {

    useEffect(() => {
        document.title = " Fitness-Tracker | Blog";
    }, []);

    return (
        <div>
            <div className=" mt-10 w-[95%] mx-auto  ">
               <h1 className="text-center font-bold text-2xl  py-6 "> Blog Or  Articles Section </h1>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open The t Articles 
                    </div>
                    <div className="collapse-content">
                        <p>Track the number of steps you take each day to ensure you meet your daily activity goals.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Click to open The t Articles 
                    </div>
                    <div className="collapse-content">
                        <p>Monitor the calories burned during your workouts and daily activities to manage your energy balance.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                    Click to open The t Articles 
                    </div>
                    <div className="collapse-content">
                        <p>Log the duration of your workouts to ensure you re meeting your fitness goals for each session.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;