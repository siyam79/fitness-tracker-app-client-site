
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
// import useAuth from '../../Hooks/useAuth';


const NewsLetter = () => {
    const axiosPublic = useAxiosPublic()
    const handleNewsLetter = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const name = form.name.value;


        const newsLetter = {
            name,
            email,
            number: "20"
        };
        console.log(newsLetter);


        axiosPublic.post('/newsLetter', newsLetter)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    toast.success('Subscribe successfully', {
                        position: 'top-center'

                    })
                    // window.location.reload()
                    // navigate('/')
                    form.reset()
                }
            })

    }

    useEffect(() => {
        document.title = "Fitness-Tracker | News Letter ";
    }, []);
    return (
        <section id="contact" className=" py-4 px-3 ">
              <h3 className="text-2xl font-semibold text-center mb-4 gont-bold uppercase "> Subscribe Now</h3>
            <div className=" text-center lg:flex items-center justify-center gap-5  ">
              
                {/* <p className="text-pink-600 mt-3 text-lg ">Get In Touch</p> */}
                <div className="  flex md:flex-row flex-col gap-6 mx-w-5xl bg-slate-900   md:p-6 p-2 lg:w-1/2 rounded-lg h-[400px] ">
                    <form onSubmit={handleNewsLetter} className=" flex flex-col flex-1 gap-5 ">

                        <input className='px-4' type="text" name="name" id="" required placeholder="Your Name" />
                        <input className='px-4' type="email" name="email" required id="" placeholder="Email Address" />

                        <div>
                            <button className=" bg-pink-600 px-6 py-2 rounded-md font-bold  ">Subscribe now </button>

                        </div>

                    </form>


                </div>
                <div className='lg:w-1/2  w-full mt-2 '>
                    <img className='w-full h-full ' src="https://petapixel.com/assets/uploads/2023/04/facebook-contact-support-featured.jpg" alt="" />
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default NewsLetter;