
import React, { useEffect, useState } from "react";

const Rashifal = () => {
 const [rashifal, setRashifal] = useState([]);
 const [loading, setLoading] = useState(true);
 const API = "https://rashifal-api.vercel.app/api";

 const fetchApiData = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setRashifal(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
 };

 useEffect(() => {
    fetchApiData();
 }, []);

 return (
    <>
    <body>
      <div className="content p-4 px-2 my-2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
            {rashifal.map((item, index) => (
              <div
                key={index}
                className="bg-white p-3 border border-gray-300 rounded-lg shadow-md mb-4"
              >
                <h2 className="text-2xl font-semibold">{item.sunsign}</h2>
                <p className="text-base">{item.prediction}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      </body>
    </>
 );
};

export default Rashifal;



// import React, { useEffect, useState } from "react";

// const Rashifal = () => {
//   const [rashifal, setRashifal] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const API = "https://rashifal-api.vercel.app/api";

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setRashifal(data);
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchApiData(API);
//   }, []);

//   return (
//     <>
     
//       <div className="content">
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 ">
//             {rashifal.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-5 border border-gray-300 rounded-lg shadow-md"
//               >
//                 <h2 className="text-lg font-semibold">{item.sunsign}</h2>
//                 <p>{item.prediction}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div> 
    
//     </>
//   );
// };

// export default Rashifal;




// import React, { useEffect, useState } from "react";

// const Rashifal = () => {
//   const [rashifal, setRashifal] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const API = "https://rashifal-api.vercel.app/api";

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setRashifal(data); // Update the rashifal state with the fetched data
//       setLoading(false); // Set loading to false once data is available
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchApiData(API);
//   }, []);

//   return (
//     <div className="overflow-y-scroll h-screen"> {/* Apply a fixed height and enable vertical scrolling */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 ">
//           {rashifal.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 border border-gray-300 rounded-lg shadow-md"
//             >
//               <h2 className="text-lg font-semibold">{item.sunsign}</h2>
//               <p>{item.prediction}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rashifal;




// import React, { useEffect, useState } from "react";

// const Rashifal = () => {
//   const [rashifal, setRashifal] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const API = "https://rashifal-api.vercel.app/api";

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       setRashifal(data); // Update the rashifal state with the fetched data
//       setLoading(false); // Set loading to false once data is available
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchApiData(API);
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 ">
//           {rashifal.map((item, index) => (
//             <div
//               key={index} 
//               className="bg-white p-4 border border-gray-300 rounded-lg shadow-md"
//             >
//               <h2 className="text-lg font-semibold">{item.sunsign}</h2>
//               <p>{item.prediction}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rashifal;
