
const About = () => {
    return (
        <div>
            <div className="mx-w-[1100px] mx-auto grid lg:grid-cols-2 gap-4  py-10 px-4 ">
                <div className="grid grid-cols-2 grid-rows-6 h-[80vh] ">
                    <img className=" row-span-3 object-cover w-full h-full p-2 " src="https://i.ibb.co/nkpK9Q3/banner.jpg" alt="" />
                    <img className="row-span-2  object-cover w-full h-full p-2 " src="https://i.ibb.co/qxjbFZY/jonathan-borba-Vt-Ca-DJ-Wf-OA-unsplash.jpg" alt="" />
                    <img className=" row-span-2  object-cover w-full h-full p-2 " src="https://i.ibb.co/jZvn6cG/jonathan-chng-Hgo-Kvt-Kpy-HA-unsplash.jpg" alt="" />
                    <img className="row-span-3 object-cover w-full h-full p-2 " src="https://i.ibb.co/b7P5BGn/scott-webb-xw-Ml-VSq-P20-U-unsplash.jpg" alt="" />
                    <img className="row-span-2  object-cover w-full h-full p-2 " src="https://i.ibb.co/C5k9w00/john-arano-h4i9-G-de7-Po-unsplash.jpg" alt="" />
                </div>

                <div className="flex flex-col h-full justify-center ">
                    <h1 className="text-2xl font-bold ">Personal Training, Advice & Support</h1>
                    <p className="text-lg font-medium py-4 ">Personal service is key to everything we do. Our award-winning PT coaches offer a range of bespoke training packages to help achieve your individual fitness goals.</p>
                    <div>
                    <button className="text-xl font-bold bg-cyan-600 px-4 py-2 text-white rounded-sm ">Read Now</button>
                    <button></button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;