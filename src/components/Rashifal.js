import React, { useEffect } from "react";

const Rashifal = () => {
  let isLoading = true;

  let API = "https://rashifal-api.vercel.app/api";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      isLoading = false; 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (isLoading){
  return <div>
    <h1>Loading</h1>
  </div>;
};
}

export default Rashifal;
