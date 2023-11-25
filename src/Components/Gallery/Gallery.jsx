
// const getImg = async ({imgParam = 0}) =>{
//     const res = await fetch(`http://localhost:5000/infinityImg`)
//     const data = await res.json();
//     console.log(data);
// };



const Gallery = () => {
    return (
        <div>
            gallery
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