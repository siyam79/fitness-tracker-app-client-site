
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import useAuth from '../../Hooks/useAuth';


const NewsLetter = () => {



    const handleNewsLetter = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const name = form.name.value;


        const newsLetter = {
            name,
            email
        };
        console.log(newsLetter);

        fetch('http://localhost:5000/newsLetter', {
            method: 'POST',
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(newsLetter)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(" News Letter Collection Success Full ", {
                        position: "top-center"
                    })
                   form.reset()
                }

            })
    }

    useEffect(() => {
        document.title = " Fitness-Tracker | News Letter ";
    }, []);
    return (
        <section id="contact" className=" py-4 px-3 ">
            <div className=" text-center flex items-center justify-center gap-5  ">
                {/* <h3 className="text-2xl font-semibold"> News Letter <span className=" text-pink-600">Me</span>  </h3> */}
                {/* <p className="text-pink-600 mt-3 text-lg ">Get In Touch</p> */}
                <div className="  flex md:flex-row flex-col gap-6 mx-w-5xl bg-slate-900   md:p-6 p-2 w-1/2  rounded-lg h-[400px] ">
                    <form onSubmit={handleNewsLetter} className=" flex flex-col flex-1 gap-5 ">

                        <input className='px-4' type="text" name="name" id="" required placeholder="Your Name" />
                        <input className='px-4' type="email" name="email" required id="" placeholder="Email Address" />

                        <div>
                        <button className=" bg-pink-600 px-6 py-2 rounded-md font-bold  ">Subscribe now </button> 
                        
                        </div>

                    </form>


                </div>
                <div className='w-1/2  '>
                    <img className='w-full h-full ' src="https://petapixel.com/assets/uploads/2023/04/facebook-contact-support-featured.jpg" alt="" />
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default NewsLetter;