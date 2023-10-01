import React, { useEffect, useState } from "react";

const Rashifal = () => {
  const [rashifal, setRashifals] = useState([]);
  const [loading, isLoading] = useState(true);
  const API = "https://rashifal-api.vercel.app/api";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      // isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1 className="flex justify-center sticky text-2xl">
          आजको राशिफल हेर्नुहोस ।
          </h1>
          {rashifal.map((rashi, index) => (
          <div key={index}>
            <h2>{rashi.name}</h2>
          </div>
        ))}
          <div className = "flex justify-center py-2" >
        <input 
          type="text"
          placeholder="राशिको नाम लेख्नुहोस।"
          className=" border border-black flex-0 outline-none mr-2 p-1 rounded-lg"
        />
        <button className="bg-orange-600  text-white font-bold py-2 px-4 rounded-lg border-b-4">
          Search 
          </button>
          </div>
       </div>
    );
  } 
};

export default Rashifal;
  


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


