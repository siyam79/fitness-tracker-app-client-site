// import banner from '../../assets/img/valery-sysoev-LDAirERNzew-unsplash.jpg'

const Banner = () => {
    return (
        <div className="">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url("https://i.ibb.co/0YpVGkw/valery-sysoev-LDAir-ERNzew-unsplash.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">BE YOUR
                         <br />BEST SELF</h1>
                        <p className="mb-5">The BeZu fitness studios combine the latest fitness classes and technology in one very exclusive, premium space and juxtaposes them with high energy workouts, high tech LPG Endermologie®, fitness scanning and body sculpting therapies for the ultimate mental and physical balance..</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;