import React, { useEffect, useState } from "react";

const Rashifal = () => {
  const [rashifal, setRashifal] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = "https://rashifal-api.vercel.app/api";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setRashifal(data); // Update the rashifal state with the fetched data
      setLoading(false); // Set loading to false once data is available
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>
      <div className="flex justify-center py-2">
        <input
          type="text"
          placeholder="राशिको नाम लेख्नुहोस।"
          className="border border-black flex-0 outline-none mr-2 p-1 rounded-lg"
        />
        <button className="bg-orange-600 text-white font-bold py-2 px-4 rounded-lg border-b-4">
          Search
        </button>
      </div>
      <h1 className="flex justify-center py-2 text-xl">
        आजको राशिफल हेर्नुहोस ।
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
          {rashifal.map((item, index) => (
            <div
              key={index} // Use the index as the key
              className="bg-white p-4 border border-gray-300 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-semibold">{item.sunsign}</h2>
              <p>{item.prediction}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rashifal;


// import React, { useEffect, useState } from "react";

// const Rashifal = () => {
//   const [rashifal, setRashifals] = useState([]);
//   const [loading, isLoading] = useState(true);
//   const API = "https://rashifal-api.vercel.app/api";

//   const fetchApiData = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data);
//       // isLoading = false;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchApiData(API);
//   }, []);

//   if (isLoading) {
//     return (
//       <div>
//         <h1 className="flex justify-center sticky text-2xl">
//           आजको राशिफल हेर्नुहोस ।
//           </h1>

//           <div className = "flex justify-center py-2" >
//         <input
//           type="text"
//           placeholder="राशिको नाम लेख्नुहोस।"
//           className=" border border-black flex-0 outline-none mr-2 p-1 rounded-lg"
//         />
//         <button className="bg-orange-600  text-white font-bold py-2 px-4 rounded-lg border-b-4">
//           Search
//           </button>
//           </div>
//        </div>
//     );
//   }
// };

// export default Rashifal;

// const Rashifal = () =>{

//   const [rashifals, setRashifals] = useState([]);

//   const getRashifals = async () => {
//   const response = await fetch('https://rashifal-api.vercel.app/api');
//   setRashifals(await response.json());
//   }

//   useEffect (() => {
//     getRashifals();
//   }, []);

//   return (
//     <>
//     <h1>Loading...</h1>
//     </>
//     {
//       rashifals.map(() => {
//         return(

//         )
//       })
//     }
//   )

// }
