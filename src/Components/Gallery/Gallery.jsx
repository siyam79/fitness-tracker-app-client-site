
import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import AOS from 'aos';
import 'aos/dist/aos.css';
const LIMIT = 5;

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [activePage, setActivePage] = useState(12);
    const [totalData, setTotalData] = useState(0);
    const [loading, setLoading] = useState(false);

    const containerStyle = {
        backgroundImage: 'url("https://i.ibb.co/KVX5zNn/ezgif-com-webp-to-png.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
    };

    const fetchData = () => {
        if (loading) return;

        setLoading(true);

        axios
            .get('https://n-three-vert.vercel.app/infinityImg', {
                params: {
                    page: activePage,
                    size: LIMIT,
                },
            })
            .then(({ data }) => {
                setActivePage(activePage + 1);
                setGallery((prevGallery) => [...prevGallery, ...data]);
                setTotalData(data.length);
            })
            .catch((error) => {
                console.error('Error:', error.response);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        AOS.init({ duration: "2000" });

    }, []);


    useEffect(() => {
        document.title = " Fitness-Tracker | Gallery";
    }, []);

    return (
        <div>
            <div className="relative h-screen flex items-center justify-center" style={containerStyle}>
                <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
                <div className="relative z-10 text-white text-center">
                    <h1 className="lg:text-4xl font-bold uppercase text-center">Fitness Center || Gallery</h1>
                </div>
            </div>
            <InfiniteScroll
                dataLength={gallery.length}
                next={fetchData}
                hasMore={gallery.length < totalData}
                loader={<span className="loading loading-spinner loading-lg"></span>}
                endMessage={<p className="text-center text-2xl text-pink-500 font-bold mt-5"><span className="loading loading-spinner text-error"></span></p>}
            >
                <div className="grid lg:grid-cols-6 grid-cols-1 - gap-5 mt-8"   >
                    {gallery.map((galleries, index) => (
                        <div key={galleries._id || index} className="lg:max-w-md mx-auto bg-white rounded-xl overflow-hidden w-full shadow-md" data-aos="fade-up">
                            <img className="h-40 lg:w-60 w-full object-cover" src={galleries.image} alt="Card" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2 text-center">{galleries.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Gallery;






