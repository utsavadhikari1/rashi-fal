import React from "react";
import Rashifal from "./components/Rashifal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RashifalBox from "./components/RashifalBox";
import DateTime from "./components/DateTime";


function App() {
  return (
    <div>
      <Navbar/>
      <DateTime />
      <Rashifal />
      <RashifalBox />      
      <Footer />  
    </div>
  );
}

export default App;
