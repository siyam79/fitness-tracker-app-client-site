
import axios from "axios";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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
            .get('http://localhost:5000/infinityImg', {
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

    return (
        <div>
            <div className="relative h-screen flex items-center justify-center" style={containerStyle}>
                <div className="absolute inset-0 bg-black opacity-25 rounded-xl"></div>
                <div className="relative z-10 text-white text-center">
                    <h1 className="text-4xl font-bold uppercase text-center">Fitness Center || Gallery</h1>
                </div>
            </div>
            <InfiniteScroll
                dataLength={gallery.length}
                next={fetchData}
                hasMore={gallery.length < totalData}
                loader={<span className="loading loading-spinner loading-lg"></span>}
                endMessage={<p className="text-center text-2xl text-pink-500 font-bold mt-5"><b>You have loaded all data</b></p>}
            >
                <div className="grid grid-cols-4 gap-5 mt-8">
                    {gallery.map((galleries, index) => (
                        <div key={galleries._id || index} className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
                            <img className="h-64 w-96 object-cover" src={galleries.image} alt="Card" />
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






// import { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useEffect, useRef, useState } from 'react';

// function Gallery() {
//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const containerRef = useRef();

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/data?page=${page}&limit=12`);
//                 setData(prevData => [...prevData, ...response.data]);
//                 setPage(prevPage => prevPage + 1);
//             } catch (error) {
//                 console.error(error);
//             }
//             setLoading(false);
//         };

//         const handleScroll = () => {
//             const container = containerRef.current;
//             if (container && container.scrollHeight - container.scrollTop === container.clientHeight && !loading) {
//                 fetchData();
//             }
//         };

//         fetchData(); // Initial fetch
//         containerRef.current.addEventListener('scroll', handleScroll);

//         return () => {
//             containerRef.current.removeEventListener('scroll', handleScroll);
//         };
//     }, [page, loading]);

//     return (
//         <div ref={containerRef} style={{ height: '500px', overflowY: 'scroll' }}>
//             <h1>Your Frontend App</h1>
//             <ul>
//                 {data.map((item, index) => (
//                     <li key={index}>
//                         <img src={item.image} alt={`Image ${index}`} />
//                         {/* Add other elements or styles as needed */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Gallery;